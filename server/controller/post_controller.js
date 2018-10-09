const allPosts = [];
let topFourPosts = [];

module.exports = {
    addAllPosts: (req, res) => {
        let tempArr = [];
        req.body.articles.map((posts, i) => {
            let post = {
                post: posts,
                id: i
            }
            allPosts.push(post)
            //console.log('post here?', allPosts)
        })
        //console.log(allPosts)
        topFourPosts = allPosts.filter((el, i) => i < 4)
        
        console.log(topFourPosts);
       
        res.status(200).json('post stored');
    },
    getTopFour: (req,res) => {
        //console.log('sdfdsfds',topFourPosts);
        res.status(200).json(topFourPosts);
    }
}

// for(let k = 0; k < allPosts.length; k++){
//     if (k < 4) {
//         topFourPosts.push(allPosts[k])
//     }
// }