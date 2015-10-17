if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

HEADS=[{head:0},{head:1}];
EYES=[{eyes:0},{eyes:1}];
EYEBROWS=[{eyebrows:0},{eyebrows:1}];
MOUTH=[{mouth:0},{mouth:1}];

ALL_QUESTIONS = cartesian(HEADS,EYES,EYEBROWS,MOUTH);
ALL_QUESTIONS = _.map(ALL_QUESTIONS, function(x) {
  var newQ = {}
  _.each(x, function(y) {
    _.extend(newQ, y);
  });
  return newQ;
});

function cartesian() {
    var r = [], arg = arguments, max = arg.length-1;
    function helper(arr, i) {
        for (var j=0, l=arg[i].length; j<l; j++) {
            var a = arr.slice(0); // clone arr
            a.push(arg[i][j]);
            if (i==max)
                r.push(a);
            else
                helper(a, i+1);
        }
    }
    helper([], 0);
    return r;
}


questionOrder = function(participantId) {
  var questions = ALL_QUESTIONS;
  var chanceSeeded = new Chance(participantId);

  return chanceSeeded.shuffle(questions);
}
