const personalCategories = [
  {
    id: 1,
    name: "Income",
    startPercent: 100,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Weekly", 
      "Bi-Weekly", 
      "Monthly", 
      "One Time"
    ]
  },{
    id: 2,
    name: "Mortgage/Rent",
    minPercent: 25,
    maxPercent: 35,
    startPercent: 25,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "1st Mortgage",
      "2nd Mortgage",
      "Rent",
      "Repairs/Maint.",
      "Real Estate Taxes",
      "Association Dues"
    ]
  },{
    id: 3,
    name: "Utilities",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
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
    id: 4,
    name: "Insurance",
    minPercent: 10,
    maxPercent: 25,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Life",
      "Health",
      "Car",
      "Home Owners/Renters",
      "Disability",
      "Long-Term Care"
    ]
  },{
    id: 5,
    name: "Giving",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Tithes",
      "Charity"
    ]
  },{
    id: 6,
    name: "Transportation",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Gas & Oil",
      "Repairs & Tires",
      "License & Taxes",
      "Bus/Train/Tram Passes"
    ]
  },{
    id: 7,
    name: "Debt",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Credit Card",
      "Car Payment",
      "Student Loan",
      "HELOC Loan",
      "Personal Loan",
      "Visa",
      "Master Card",
      "Discovery",
      "American Express"
    ]
  },{
    id: 8,
    name: "Food",
    minPercent: 5,
    maxPercent: 15,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
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
    id: 9,
    name: "Medical/Health",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Vitamins",
      "Medications",
      "Doctors Bills",
      "Dentist",
      "Optometrist"
    ]
  },{
    id: 10,
    name: "Personal",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
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
    id: 11,
    name: "Recreation",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Gym Membership",
      "Entertainment",
      "Trainer",
      "Sport Dues"
    ]
  },{
    id: 12,
    name: "Savings",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Emergency Fund",
      "Christmas",
      "Birthdays",
      "Vacation",
      "Retirement"
    ]
  },{
    id: 13,
    name: "Clothing",
    minPercent: 2,
    maxPercent: 7,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Adults", 
      "Children", 
      "Cleaning/Laundry"
    ]
  }
];

const businessCategories = [
  {
    id: 1,
    name: "Income",
    startPercent: 100,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: ["Daily", "Weekly", "Bi-Weekly", "Monthly", "One Time"]
  },{
    id: 2,
    name: "Employees",
    minPercent: 5,
    maxPercent: 50,
    startPercent: 25,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: ["Reception","Sales","Labor","Software","Engineering","Managment","Tech","Assistance","Remote","Human Resources"]
  },{
    id: 3,
    name: "Property",
    minPercent: 5,
    maxPercent: 25,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: ["Mortgage","Rent","Insurance","Taxes","Equipment"]
  },{
    id: 4,
    name: "Utilities",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
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
    id: 5,
    name: "Giving",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Charity"
    ]
  },{
    id: 6,
    name: "Transportation",
    minPercent: 10,
    maxPercent: 15,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Gas & Oil",
      "Repairs & Tires",
      "License & Taxes",
      "Bus/Train/Tram Passes"
    ]
  },{
    id: 7,
    name: "Debt",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Credit Card",
      "Vehical Payment",
      "Buisness Loan",
      "Equipment"
    ]
  },{
    id: 8,
    name: "Food",
    minPercent: 5,
    maxPercent: 15,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [
      "Groceries",
      "Resturants/Takeout"
    ]
  },{
    id: 9,
    name: "Advertising",
    minPercent: 5,
    maxPercent: 25,
    startPercent: 10,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: ["Publications","Signs"]
  },{
    id: 10,
    name: "Petty cash",
    minPercent: 2,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: ["Event","Wine & Dine","Conference","Client"]
  },{
    id: 11,
    name: "Insurance",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: ["Vehical","Workers Comp","Renters","Mortgage","Health","Dental","Vision"]
  },{
    id: 12,
    name: "Services",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: [ "Plumbing","Heating","Protection","Monitoring","Phone","Repairs"]
  },
  {
    id: 13,
    name: "Savings",
    minPercent: 5,
    maxPercent: 10,
    startPercent: 5,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
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
    id: 14,
    name: "Miscellaneous",
    minPercent: 5,
    maxPercent: 30,
    startPercent: 15,
    budgetTotal: 0.0,
    expensesTotal: 0.0,
    subCategories: []
  }
];

module.exports = {
  personalCategories,
  businessCategories,
};
