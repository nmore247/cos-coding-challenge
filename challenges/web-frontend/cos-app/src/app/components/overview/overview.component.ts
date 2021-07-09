import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IAuction } from 'src/app/models/auction.interface';
import { IAuth } from 'src/app/models/auth.interface';
import { AuctionService } from 'src/app/services/auction.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  auctions: IAuction[];
  interval: any;
  isLoading: boolean;
  durationInSeconds: number = 2;
  checked = false;
  auth: IAuth;

  constructor(
    private auctionSvc: AuctionService,
    private router: Router,
    private _snackBar: MatSnackBar,
    private authSrv: AuthService
  ) {}

  ngOnInit() {
    this.refreshAuctions();

    this.interval = setInterval(() => {
      this.isLoading = true;
      this.refreshAuctions();
    }, 20000);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 1000,
    });
  }

  // function to fetch auction data

  refreshAuctions() {
    this.auctionSvc.getAuctions().subscribe(
      (data) => {
        if (data) {
          this.isLoading = false;
          this.auctions = data;
          console.log('Auction Data' + data);
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  logOut() {
    this.router.navigate(['/login']);
    this.openSnackBar('Logged Out', 'Succesfully');
  }

  onCheckMyAuctions() {
    this.authSrv
      .getLoggedInUser(localStorage.getItem('Token'))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
