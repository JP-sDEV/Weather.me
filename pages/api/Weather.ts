import GetWeather, { WeatherAPIResponse } from "./Helpers/GetWeather";

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res:NextApiResponse<any>
    ) {
    
    if (req.method == "POST") {
        const location: string = req.body.location

        if (!location) {
            res.status(400).json({
                "message": "invalid location"
            })
        } else if (location) {
            let data: any = await GetWeather(location)
            res.status(200).json({"res": data})
        }
    }

}
