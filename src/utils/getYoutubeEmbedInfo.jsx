const GetYouTubeEmbedInfo = (url) => {
    if (!url) {
        return {
            embedUrl: "",
            isShort: false,
        };
    }

    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname.replace("www.", "");

        // YouTube Shorts
        // https://www.youtube.com/shorts/VIDEO_ID
        if (
            hostname === "youtube.com" &&
            parsedUrl.pathname.startsWith("/shorts/")
        ) {
            const videoId = parsedUrl.pathname
                .split("/shorts/")[1]
                .split("/")[0];

            return {
                embedUrl: `https://www.youtube.com/embed/${videoId}`,
                isShort: true,
            };
        }

        // Regular YouTube video
        // https://www.youtube.com/watch?v=VIDEO_ID
        if (
            hostname === "youtube.com" &&
            parsedUrl.pathname === "/watch"
        ) {
            const videoId = parsedUrl.searchParams.get("v");

            return {
                embedUrl: videoId
                    ? `https://www.youtube.com/embed/${videoId}`
                    : url,
                isShort: false,
            };
        }

        // youtu.be/VIDEO_ID
        if (hostname === "youtu.be") {
            const videoId = parsedUrl.pathname
                .slice(1)
                .split("/")[0];

            return {
                embedUrl: videoId
                    ? `https://www.youtube.com/embed/${videoId}`
                    : url,
                isShort: false,
            };
        }

        // Already an embed URL or unknown URL
        return {
            embedUrl: url,
            isShort: false,
        };

    } catch {
        return {
            embedUrl: url,
            isShort: false,
        };
    }
};

export default GetYouTubeEmbedInfo;