const personalCategories = [
  {
    name: "Income",
    startPercent: 100,
    subCategories: [
      "Weekly", 
      "Bi-Weekly", 
      "Monthly", 
      "One Time"
    ]
  },{
    name: "Mortgage/Rent",
    minPercent: 25,
    maxPercent: 35,
    startPercent: 25,
    subCategories: [
      "1st Mortgage",
      "2nd Mortgage",
      "Rent",
      "Repairs/Maint.",
      "Real Estate Taxes",
      "Association Dues"
    ]
  },{
    name: "Utilities",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Electricity",
      "Gas",
      "Water",
      "Trash",
      "Phone(s)",
      "Internet",
      "TV Package",
      "Sling",
      "Netflix",
      "Amazon Prime",
      "Hulu",
      "Disney+",
      "Peacock",
      "Discovery+",
    ]
  },{
    name: "Insurance",
    minPercent: 10,
    maxPercent: 25,
    startPercent: 10,
    subCategories: [
      "Life",
      "Health",
      "Car",
      "Home Owners/Renters",
      "Disability",
      "Long-Term Care"
    ]
  },{
    name: "Giving",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Tithes",
      "Charity"
    ]
  },{
    name: "Transportation",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Gas & Oil",
      "Repairs & Tires",
      "License & Taxes",
      "Bus/Train/Tram Passes"
    ]
  },{
    name: "Debt",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Credit Card",
      "Car Payment",
      "Student Loan",
      "HELOC Loan",
      "Personal Loan"
    ]
  },{
    name: "Food",
    minPercent: 5,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Groceries",
      "Resturants/Takeout",
      "Kroger",
      "King Soopers",
      "Costco",
      "Sams Club",
      "Safeway",
      "Target",
      "Walmart",
      "Publics",
    ]
  },{
    name: "Medical/Health",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Vitamins",
      "Medications",
      "Doctors Bills",
      "Dentist",
      "Optometrist"
    ]
  },{
    name: "Personal",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Pocket Money",
      "Toiletries",
      "Subscriptions",
      "Organization Dues",
      "Cosmetics/Hair Care",
      "Education/Tuition",
      "Books/Supplies",
      "Baby Supplies",
      "Child Care/Sitter",
      "Child Support",
      "Alimony",
      "Pet Supplies",
      "Music/Technology",
      "Miscellaneous"
    ]
  },{
    name: "Recreation",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Gym Membership",
      "Entertainment",
      "Trainer",
      "Sport Dues"
    ]
  },{
    name: "Savings",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Emergency Fund",
      "Christmas",
      "Birthdays",
      "Vacation",
      "Retirement"
    ]
  },{
    name: "Clothing",
    minPercent: 2,
    maxPercent: 7,
    startPercent: 5,
    subCategories: [
      "Adults", 
      "Children", 
      "Cleaning/Laundry"
    ]
  }
];

const businessCategories = [
  {
    name: "Income",
    startPercent: 100,
    subCategories: ["Daily", "Weekly", "Bi-Weekly", "Monthly", "One Time"]
  },{
    name: "Employees",
    minPercent: 5,
    maxPercent: 50,
    startPercent: 25,
    subCategories: ["Reception","Sales","Labor","Software","Engineering","Managment","Tech","Assistance","Remote","Human Resources"]
  },{
    name: "Property",
    minPercent: 5,
    maxPercent: 25,
    startPercent: 10,
    subCategories: ["Mortgage","Rent","Insurance","Taxes","Equipment"]
  },{
    name: "Utilities",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Electricity",
      "Gas",
      "Water",
      "Trash",
      "Phone(s)",
      "Internet",
      "TV Package"
    ]
  },{
    name: "Giving",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Charity"
    ]
  },{
    name: "Transportation",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Gas & Oil",
      "Repairs & Tires",
      "License & Taxes",
      "Bus/Train/Tram Passes"
    ]
  },{
    name: "Debt",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Credit Card",
      "Vehical Payment",
      "Buisness Loan",
      "Equipment"
    ]
  },{
    name: "Food",
    minPercent: 5,
    maxPercent: 15,
    startPercent: 10,
    subCategories: [
      "Groceries",
      "Resturants/Takeout"
    ]
  },{
    name: "Advertising",
    minPercent: 5,
    maxPercent: 25,
    startPercent: 10,
    subCategories: ["Publications","Signs"]
  },{
    name: "Petty cash",
    minPercent: 2,
    maxPercent: 10,
    startPercent: 5,
    subCategories: ["Event","Wine & Dine","Conference","Client"]
  },{
    name: "Insurance",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: ["Vehical","Workers Comp","Renters","Mortgage","Health","Dental","Vision"]
  },{
    name: "Services",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [ "Plumbing","Heating","Protection","Monitoring","Phone","Repairs"]
  },
  {
    name: "Savings",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    subCategories: [
      "Emergency Fund",
      "Christmas",
      "Birthdays",
      "Equipment",
      "Vehicals",
      "Services",
      "Office Space"
    ]
  },{
    name: "Miscellaneous",
    minPercent: 5,
    maxPercent: 30,
    startPercent: 15,
    subCategories: []
  }
];

module.exports = {
  personalCategories,
  businessCategories
};
