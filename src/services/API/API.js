import axios from "axios";

class API {
    location = "/";

    getHoneyList() {
        return axios(this.location + "honey.json");
    }
}

export default new API();