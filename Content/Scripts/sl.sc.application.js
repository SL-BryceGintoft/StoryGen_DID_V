var sl = sl || {};
sl.sc = sl.sc || {};

sl.sc.application = new function () {
    //# Private Vars
    {
        var self = this;

    }

    //# Public Vars
    {
        this.somevar = "blah";
        
    }

    //# Public Methods

    {
        this.init = function () {
            alert("alive");
        };


        this.ready = function () {
            sl.sc.application.init();

        };

    }

    $(document).ready(this.ready);
};