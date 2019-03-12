import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-auction-list',
    templateUrl: './auction-list.component.html'
  })
export class AuctionListComponent implements OnInit{ 

    items: Array<any>;

    @Input() template_type: number;
    
    constructor() { }
    
    ngOnInit() {
        this.items = [];
        this.addItem();
        this.addItem();
    }
    
    addItem() {
        this.items.push(this.generateNewItem(this.items.length + 1));
    }
    
    private generateNewItem(index) {
        return {
        id: `${index}`,
        name: `Register ${index}`,
        email: `register${index}@totvs.com`,
        phone: `(55) ${index}234567`,
        location: 'Brazil',
        company: `Company ${index}`,
        zipCode: `${index}221`
        };
    }

    deleteAuction(item) {
        //Executar a deleção na api e excluir o item do array
        if(this.items.length > 0){
            let index = this.items.findIndex((itemToFind)=>itemToFind.id == item.id);
            this.items.splice(index,1);
        }
    }
}

