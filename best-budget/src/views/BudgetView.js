import React, {useContext, useState} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddBudgetItemOld from '../components/AddBudgetItemOld';
import AddBudgetItem from '../components/AddBudgetItem';
import BudgetContext from '../utils/BudgetContext'; 
// import CategoryHeaderOld from '../components/CategoryHeader old';
import BudgetItems from '../components/BudgetItems';
import CategoryHeader from '../components/CategoryHeader';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const GetMonthsLastDay = (month = -1) => {
  let dt = new Date()
  if (month >= 0) dt = new Date(dt.getFullYear(), month);
  dt = new Date(dt.getFullYear(), dt.getMonth()+1, 0)
  return dt.getDate(); 
}


// Layout budget categories
export default function Categories({categories}) {
  
  // if localStorage has budgetItems saved use that
  let localItems = [];
  let local = localStorage.getItem("budgetItems");
  if (local) {
    localItems = JSON.parse(local);
  } 

  const [budgetCategories, setBudgetCategories] = useState(categories);
  const [budgetItems, setBudgetItems] = useState(localItems);

  // const [expanded, setExpanded] = useState(categories[0].budgetTotal === 0 ? 'panel1' : false);
  const [expanded, setExpanded] = useState(false);

  const changeCategory = (category) => {
    AddBudgetItem.setNewItemCategegory = category;
  }

  const handleChange = (panel) => (event, newExpanded) => {
    console.log("🚀 ~ file: BudgetView.js ~ line 75 ~ handleChange ~ event", event)
    
    // try to get the active panel and show set the category for add item to that category.
    changeCategory(event.target.innerText);
    setExpanded(newExpanded ? panel : false);
  }
  // React.useEffect(() => {   
  //   OrganizeBudgetItems();
  //   setBudgetCategories(categories);
  // },[]); 
  
  const OrganizeBudgetItems = () => {
    //clear out budget item lists
    categories.forEach(c => {
      c.expenses = [];
      c.budgets = [];
    })

    //recreate budget item lists
    budgetItems.forEach(item => {
      // initialize expenses and budgets
      const idx = item.categoryId-1
      
      if (item.isExpense) {
        categories[idx].expenses.push(item);
      } else {
        categories[idx].budgets.push(item);
      }

    });
  }

  const AddIncome = (description, amt) => {
    let days = GetMonthsLastDay(); 
    
    switch (description) {
      case "Daily":
        categories[0].budgetTotal += amt * days;
        break;
      case "Weekly":
        categories[0].budgetTotal += amt * 4;
        break;
      case "Bi-Weekly":
        categories[0].budgetTotal += amt * 2;
        break;
      default: // monthly or one time
        categories[0].budgetTotal += amt;
        break;
    }
  }

  const createItem = (description,amount,type,category,debtTotal,interest,startDt,frequency) => {
    console.log("🚀 ~ file: BudgetView.js ~ line 132 ~ createItem ~ startDt", startDt)
    // default debt dates to today if not needed
    if (!startDt) {
      startDt = new Date(); //start date for debt calculations
    } else {
      startDt = new Date(startDt);
      console.log("🚀 ~ file: BudgetView.js ~ line 137 ~ createItem ~ startDt", startDt)
    }

    

    let endDt = new Date();  // end date for debt calculations

    // if Debt calculate end date
    if (category === "Debt") {
      const moCnt = Math.ceil(debtTotal/amount)
      endDt.setMonth(endDt.getMonth() + moCnt)
    }
    
    let userId = -1; //default userId if not logged in
    let categoryId = 0;

    //Find category id
    for (let i=0; i < budgetCategories.length-1; i++) {
      if (budgetCategories[i].name === category) {
        categoryId = budgetCategories[i].id;
        break;
      }
    }

    //Get user id if logged in *******

    // create budgetItem object from submission
    
    return {
      name: description,
      amount: amount,
      isExpense: type === "Budget" ? false : true, //convert to boolean
      category:category,
      categoryId: categoryId,
      debtTotal: type === "Budget" ? debtTotal : 0.00, //no debt total for expenses
      interest: interest / 100, //convert to percentage
      startDate: startDt.toISOString(), //convert to "2024-06-08T04:51:48.855Z" format
      endDate: endDt.toISOString(), //convert to "2024-06-08T04:51:48.855Z" format
      frequency: frequency,
      userId: userId,
    };
  }

  const makeEdit = (description,amount,type,category,categoryId,debtTotal,interest,startDt=null) => {


  }

  const addItem = (description,amount,type,category,categoryId,debtTotal,interest,startDt=null) => {
    // convert category id into category index
    const idx = categoryId-1;

    var newItem = createItem(description,amount,type,category,debtTotal,interest,startDt);
    
    let amt = parseFloat(amount)
    
    console.log("🚀 ~ file: BudgetView.js ~ line 159 ~ addItem ~ newItem", newItem)

    if (category === 'Income') {
      AddIncome(description, amt);
      categories[idx].budgets.push(newItem);
      
      // alert(`Total income amount = ${categories[0].budgetTotal}
      // Amount added = ${amt} for ${description}`);
      
      console.log("🚀 ~ file: BudgetView.js ~ line 196 ~ addItem ~ type", type)
    } else if (type === "Budget") {
      categories[idx].budgetTotal += amt;
      categories[idx].budgets.push(newItem);
    } else {
      categories[idx].expensesTotal += amt;
      categories[idx].expenses.push(newItem);
    }
    
    console.log("🚀 ~ file: BudgetView.js ~ line 201 ~ addItem ~ categories[idx]", categories[idx]);
    
    // add Item to budgetItems
    localItems.push(newItem);
    
    // set new submission to local storage 
    localStorage.setItem("budgetItems", JSON.stringify(localItems));
    localStorage.setItem("categories",JSON.stringify(categories));
    
    setBudgetCategories(categories);
    alert("added categories");
    setBudgetItems(localItems);
    alert("added budget item");
  };

  const handleItemChanges = (e) => {

  };

  const handleAmountChanges = (e) => {

  }

  return (
    <div>
      
      <BudgetContext.Provider value={{
        addItem,
        handleItemChanges,
        handleAmountChanges
      }} >
        {/* <AddBudgetItem/> */}
        {budgetCategories.map((category, i) => (
          <Accordion expanded={expanded === 'panel' + category.id} key={category.id} onChange={handleChange('panel' + category.id)}>
            
            <AccordionSummary aria-controls="panel' + category.id + 'd-content" id="panel' + category.id + 'd-header" sx={{backgroundColor: 'silver'}}>
              
              <CategoryHeader category={category.name} budgetTotal={category.budgetTotal} expenseTotal={category.expensesTotal} estPercent={category.startPercent} income={budgetCategories[0].budgetTotal}/>

            </AccordionSummary>

            <AccordionDetails sx={{backgroundColor: 'aliceblue'}}>
              
              <AddBudgetItemOld category={category.name} subCategories={category.subCategories} id={category.id} />
              <BudgetItems budgetItems={category.budgets} expenseItems={category.expenses}/>

            </AccordionDetails>

          </Accordion>
        ))}
      </BudgetContext.Provider>
      </div>
  );
}
