export const API_KEY = "AIzaSyA5bi_w-U-SBtopXFq63cWVMxJP25VtQc8"

export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`


export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const SEARCH_FETCH_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/search?part=health&channelType=any&maxResults=25&q=surfing&videoDefinition=any&videoType=any&key=${API_KEY}`