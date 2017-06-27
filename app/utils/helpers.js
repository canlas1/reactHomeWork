import axios from 'axios'



export default {

    //function will start to query NYT API via axios
    runQuery(q, begin_date, end_date) {
        const newYorkTimesAPI = "defcdcfdde634a5d8c8bd2fd522eef32";
        let formattedQuery = q.trim();
        let formattedBegin = begin_date.trim();
        let formattedEnd = end_date.trim()
        let apiResults = response.data.results;

        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${newYorkTimesAPI}&${formmattedQuery}`

        console.log('PLEASE WORK QUERY PLEASE!');

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
            params: {
                "api-key": newYorkTimesAPI,
                "q": formattedQuery,
                "begin_date": formattedBegin,
                "end_date": formattedEnd
            }
        }).then(function(results) {
            console.log("Axiiooooooooooooooooooooooooos")
            console.log(results);
            return results;
        })
    },


    // This will return any saved articles from our database
    getSaved: function() {
            return axios.get("/api/saved")
                .then(function(results) {
                    console.log("axios results", results);
                    return results;
                });
        },
        // This will save new articles to our database
        postSaved: function(title, date, url) {
            var newArticle = { title: title, date: date, url: url };
            return axios.post("/api/saved", newArticle)
                .then(function(response) {
                    console.log("axios results", response.data._id);
                    return response.data._id;
                });
        },
        // This will remove saved articles from our database
        deleteSaved: function(title, data, url) {
            return axios.delete("/api/saved", {
                    params: {
                        "title": title,
                        "data": data,
                        "url": url
                    }
                })
                .then(function(results) {
                    console.log("axios results", results);
                    return results;
                });
        }
};





