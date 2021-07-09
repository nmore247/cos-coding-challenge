import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IAuction } from '../models/auction.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }


  //fetch all auction data
  getAuctions(): Observable<IAuction[]> {
    return this.http.get('https://api-core-dev.caronsale.de/api/v1/public/preview/auctions?limit=10').pipe(
      map(data => {
        const auctionsArray: IAuction[] = [];
        for (const id in data) {
          if(data.hasOwnProperty(id)){
            auctionsArray.push(data[id])
          }
        
        }
        console.log(auctionsArray);
        return auctionsArray;
      }
      )
    )
  }
}
