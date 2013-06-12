var friends = {};
friends.warren = {
firstName: "Warren",
lastName: "Buffett",
number: "(402) 555-5555",
address: ['3555 Farnam St','Omaha','NE','68131']
};
friends.bill = {
firstName: "Bill",
lastName: "Gates",
number: "(206) 555-5555",
address: ['One Microsoft Way','Redmond','WA','98052']
};

var list = function(Friends) {
for(var key in Friends) {
console.log(key);
}
};
var search = function(name) {
  for(var key in friends) {
    if(friends[key].firstName === name) {
      console.log(friends[key]);
      return friends[key];
    }
  }
};
list(friends);
search("Warren");
