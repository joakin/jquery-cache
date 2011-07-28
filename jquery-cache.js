var $c = (function () {
    var cache: {},
        data: {};

    function get(term) {
        if (this.cache[term] === undefined) {
            if (typeof this.data[term] !== undefined) {
                this.cache[term] = $(this.data[term]);
            } else {
                log('Failed cache hit for term: ' + term);
                return undefined;
            }
        }
        return this.cache[term];
    }

    function add(term, query) {
        this.data[term] = query;
    }

    function refresh(term) {
        if (typeof this.data[term] !== undefined) this.cache[term] = $(this.data[term]);
        return Cache.get(term);
    }

    return {
        get: get,
        add: add,
        refresh: refresh
    };
    
})();

