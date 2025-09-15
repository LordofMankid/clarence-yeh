// src/pages/api/spotify/now-playing.js

export async function GET(request) {
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
    const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

    // 1. Get access token
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
                "Basic " + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: REFRESH_TOKEN,
        }),
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
        return new Response(
            JSON.stringify({ error: "Could not refresh access token", details: tokenData }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    // 2. Get currently playing track
    let nowPlayingResponse = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    let trackData = null;

    if (nowPlayingResponse.status === 204 || nowPlayingResponse.status > 400) {
        // fallback to recently played
        const recentResponse = await fetch(
            "https://api.spotify.com/v1/me/player/recently-played?limit=1",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        const recentData = await recentResponse.json();
        const track = recentData.items?.[0]?.track;

        if (track) {
            trackData = {
                track: track.name,
                artist: track.artists.map(a => a.name).join(", "),
                albumArt: track.album.images[0].url,
                url: track.external_urls.spotify,
            };
        }
    } else {
        const data = await nowPlayingResponse.json();
        const track = data.item;
        trackData = {
            track: track.name,
            artist: track.artists.map(a => a.name).join(", "),
            albumArt: track.album.images[0].url,
            url: track.external_urls.spotify,
        };
    }

    if (trackData) {
        return new Response(JSON.stringify(trackData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response(JSON.stringify({ message: "No track currently playing." }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
}
