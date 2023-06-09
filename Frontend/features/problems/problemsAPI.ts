import axios from "axios";
import { Platform } from "react-native";
import { ProblemEntity } from "./problemEntity";

export class ProblemsAPI {
    // static myIp: string = '192.168.0.105'
    static baseUrl: string = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

    static async create(problem: ProblemEntity) {
        console.log("create 123")
        try {
            console.log("sending data", problem);
            
            // const result = await axios.post("http://" + this.myIp + ':3000/problems', {
            const result = await axios.post("http://" + this.baseUrl + ':3000/problems', problem, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log("after sending data", problem);
            return result.data;
        }
        catch(error) {
        }
    }

    static async fetchAllProblems() {
        try {
            // const result = await axios.get("http://" + this.myIp + ':3000/problems')
            const result = await axios.get("http://" + this.baseUrl + ':3000/problems')
            console.log(result);
            
            return result.data
        }
        catch(error) {
            console.log("error", error);
        }
    }
}