import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
    req: NextApiRequest,
    res:NextApiResponse<any>
    ) {
    
    if (req.method == "POST") {
        const location: String = req.body.location

        if (!location) {
            res.status(400).json({
                "message": "invalid location"
            })
        } else if (location) {
            let data: any;
            await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&format=json&apiKey=${process.env.GEOAPIFY_KEY}`)
                .then(res => res.json())
                .then(result => data = result)
            res.status(200).json({"res": data})
        }
    }

}
