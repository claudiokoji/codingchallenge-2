import { Bid } from './bid';

export interface Auction{

    _id: string;
    name: string;
    photo_url: string;
    base_price: number;
    bid_type: number;
    bid_step: number;
    status: number;
    owner: string;
    expirationDate: Date;
    bids: Bid[]
        
}
