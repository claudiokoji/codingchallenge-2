import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auction-creation',
  templateUrl: './auction-creation.component.html'
})
export class AuctionCreationComponent {
    auctionForm: FormGroup;
    bidType: boolean;

    constructor(private fb: FormBuilder) {
        this.createAuctionForm();
      }

    createAuctionForm() {
        this.auctionForm = this.fb.group({
        produto: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(30)
        ])],
        address: ['', Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(50)
        ])],
        number: ['', Validators.compose([
        Validators.required, Validators.min(1), Validators.max(99999)
        ])],
        email: ['', Validators.required],
        website: ['', Validators.required],
        bidType: ['']
    });
    }

}

