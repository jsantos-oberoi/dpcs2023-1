const stack = {
    data: [],
    top: 0,
    push: function(element) {
        this.data[this.top] = element;
        this.top++;
    },
    pop: function() {
        let element = this.data[this.top - 1];

        this.top--;
        if (this.top < 0) {
            this.top = 0;
            return undefined;
        }
        return element;
    }
}