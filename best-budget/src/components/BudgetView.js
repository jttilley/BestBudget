import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddBudgetItem from './AddBudgetItem';
import BudgetContext from '../utils/BudgetContext'; 
import CategoryHeader from './CategoryHeader';
import BudgetItems from './BudgetItems';

// copied from Material UI site
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
  palette: {
    mode: 'dark',
  },
}));

// copied from Material UI site
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

// copied from Material UI site
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

  const [budgetCategories, setBudgetCategories] = React.useState(categories);
  const [budgetItems, setBudgetItems] = React.useState(localItems);
    
  // const [expanded, setExpanded] = React.useState<"" | false>('panel1');
  const [expanded, setExpanded] = React.useState(false);

    // const handleChange =
  //   (panel: "string") => (event: React.SyntheticEvent, newExpanded: boolean) => {
  //     setExpanded(newExpanded ? panel : false);
  //   };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  React.useEffect(() => {   
    OrganizeBudgetItems();
    setBudgetCategories(categories);
  },[]); 
  
  
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
      
      if (item.isExpense && item.category !== 'Income') {
        categories[idx].expenses.push(item);
      } else {
        categories[idx].budgets.push(item);
      }
      // console.log("🚀 ~ file: BudgetView.js ~ line 103 ~ OrganizeBudgetItems ~ categories[idx] AFTER", categories[idx])
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




  const addItem = (description,amount,type,category,categoryId,debtTotal,startDt=null) => {
    // convert category id into category index
    const idx = categoryId-1;

    // default debt dates to today if not needed
    if (!startDt) startDt = new Date(); //start date for debt calculations
    let endDt = new Date();  // end date for debt calculations

    let userId = -1; //default userId if not logged in
    let amt = parseFloat(amount)
    
    
    //Get user id if logged in *******


    // if Debt calculate end date
    if (category === "Debt") {
      const moCnt = Math.ceil(debtTotal/amount)
      endDt.setMonth(endDt.getMonth() + moCnt)
    }

    // create budgetItem object from submission
    var newItem = {
      name: description,
      amount: amount,
      isExpense: type === "Budget" ? false : true,
      category:category,
      categoryId: categoryId,
      debtTotal: debtTotal,
      startDate: startDt,
      endDate: endDt,
      userId: userId,
    };

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
    
    setBudgetItems(localItems);
    
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
      {budgetCategories.map((category, i) => (
        <Accordion expanded={expanded === 'panel' + category.id} key={category.id} onChange={handleChange('panel' + category.id)}>
          
          <AccordionSummary aria-controls="panel' + category.id + 'd-content" id="panel' + category.id + 'd-header" sx={{backgroundColor: 'silver'}}>
            
            <CategoryHeader category={category.name} budgetTotal={category.budgetTotal} expenseTotal={category.expensesTotal} estPercent={category.startPercent} income={budgetCategories[0].budgetTotal}/>

          </AccordionSummary>

          <AccordionDetails sx={{backgroundColor: 'aliceblue'}}>
            
            <AddBudgetItem category={category.name} subCategories={category.subCategories} id={category.id}/>
            
            <BudgetItems budgetItems={category.budgets} expenseItems={category.expenses}/>

            {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography> */}

          </AccordionDetails>

        </Accordion>
      ))}
      </BudgetContext.Provider>
      </div>
  );
}
