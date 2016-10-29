module.exports.homeList = function(req, res){

    var locations = [
        {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        },
        {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        },
        {
            name: 'Buger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Hot Drinks', 'Food', 'Premium wifi'],
            distance: '250m'
        }
    ];

    res.render('locations-list',{
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        locations: locations
    });
}

module.exports.locationInfo = function(req, res){
    res.render('location-info',{ title: 'Location' });
}

module.exports.addReview= function(req, res){
    res.render('location-review-form',{ title: 'Add Review' });
}