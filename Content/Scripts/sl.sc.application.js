var sl = sl || {};
sl.sc = sl.sc || {};

sl.sc.application = new function () {
    //# Private Vars
    {
        var self = this;

    }

    //# Public Vars
    {
        //this.featuresFile = "http://localhost/Content/Data/features.json";
        //this.storiesFile = "http://localhost/Content/Data/stories.json";
        this.featuresFile = "../../../Content/Data/features.json";
        this.storiesFile = "../../../Content/Data/stories.json";
        this.LocalStoreGremlins = "Gremlins";
        this.LocalStoreGremlins = "Notes";
        this.LocalStoreFeatures = "Features";
        this.localStoreStories = "Stories";
        this.userStoryIntro = "As a user, I can view content based on my nearest location, so that I can browse deals closest to me.";
        this.header_AcceptanceCriteria = "-----Acceptance Criteria-----";
        this.header_GremlinCriteria = "-----Gremlin Criteria-----";
        this.header_NotesCriteria = "-----Notes Criteria-----";
        this.header_ProjectLimits = "-----Project Limits-----";
    }

    //# Public Methods

    {

        this.setLocalStorageItem = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        };

        this.getLocalStorageItem = function (key) {
            var retrievedObject = localStorage.getItem(key);
            if (retrievedObject)
                return JSON.parse(retrievedObject);
            return null;
        };

        this.getJsonData = function (file,cb) {
            //console.log(file);
            $.ajax( file, {
                format: "json"
            })
            .done(function( data ) {
                cb(data);
            })
            .error(function(jqXhr, textStatus, error) {
                alert("ERROR: " + textStatus + ", " + error);
            });
        };
        
        this.renderFeatures = function (data) {
            //console.log(data);
            //console.log(sl.sc.application.localStoreFeatures);
            //sl.sc.application.setLocalStorageItem(sl.sc.application.localStoreFeatures,data);
            //var test = sl.sc.application.getLocalStorageItem(sl.sc.application.localStoreFeatures);
            //console.log(test);
        };
        this.renderStories = function (data) {
            console.log(data);
            //console.log(JSON.stringify(data));
        };

        this.init = function () {
            //sl.sc.application.getJsonData(sl.sc.application.featuresFile, sl.sc.application.renderFeatures);
            //sl.sc.application.getJsonData(sl.sc.application.storiesFile, sl.sc.application.renderStories);
        };

        this.ready = function () {
            //alert("hi");
            //sl.sc.application.init();

        };
    }

    $(document).ready(this.ready);
};