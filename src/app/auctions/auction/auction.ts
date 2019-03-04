export interface Auction{
    "hasNext" : boolean,
	"items":[{
                "_id": string,
                "name": string,
                "photo_url": string,
                "base_price": number,
                "bid_type": number,
                "bid_step": number,
                "status": number,
                "owner": string,
                "expirationDate": Date,
                "bids": [{
                            "email": string,
                            "value": number,
                            "timestamp": Date
				        }]
            }]
}
