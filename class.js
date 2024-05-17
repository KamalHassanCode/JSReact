class Storage {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        // Add an item to the storage
        this.items.push(item);
    }

    removeItem(item) {
        // Remove an item from the storage
        let index = -1;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.items.splice(index, 1);
        } else {
            console.log(`${item} not found in the storage.`);
        }
    }

    getItems() {
        // Get a list of items in the storage
        return this.items;
    }
}

let storage = new Storage();
storage.addItem("Pirelli P zero Wet/treaded");
storage.addItem("Pirelli P zero Dry/Slicks");
storage.addItem("SuspensionFront - Double wishbone push-rod");
storage.addItem("SuspensionRear - Double wishbone pull-rod");
storage.addItem("F1 Engine - V6 turbocharged");
storage.addItem("Chassis - SF24");
console.log("Items in storage:", storage.getItems());

storage.removeItem("Pirelli P zero Wet/treaded");
console.log("Items in storage after removing Pirelli P zero Wet/treaded:", storage.getItems());


