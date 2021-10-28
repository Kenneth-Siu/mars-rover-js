const router = express.Router();

function ApiData(){
    router.get("/photos", function (req, res) {
        got
          .get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
          )
          .json()
          .then(function (body) {
            let names = [];
            let ApiKey = "";
            for (let a =0;a>body.photos;a++) {
                res.send(body.photos[a])
            }
            return got
              .get(
            "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY"
              )
              .json();
          })
          .then(function (response) {
            res.send(body.photos[0]);
          })
          .catch(function (ERR) {
            console.error(ERR);
            res.send(ERR)
          });
      });
}

export default ApiData
