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
console.log("🚀 ~ file: BudgetView.js ~ line 70 ~ localItems", localItems)



  const [budgetCategories, setBudgetCategories] = React.useState(categories);
  // console.log("🚀 ~ file: BudgetView.js ~ line 79 ~ Categories ~ budgetCategories", budgetCategories)
  const [budgetItems, setBudgetItems] = React.useState(localItems);
  // console.log("🚀 ~ file: BudgetView.js ~ line 80 ~ Categories ~ budgetItems", budgetItems)
    
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
    setBudgetCategories(categories);
  },[]); 
  
  

  const CalculateIncomeTotal = (budgetItem) => {

  }


  const addItem = (description,amount,type,category,categoryId,debtTotal,startDt=null) => {
    
    console.log("🚀 ~ file: BudgetView.js ~ line 90 ~ addItem ~ description", description)
    console.log("🚀 ~ file: BudgetView.js ~ line 90 ~ addItem ~ amount", amount)
    console.log("🚀 ~ file: BudgetView.js ~ line 90 ~ addItem ~ type", type)
    console.log("🚀 ~ file: BudgetView.js ~ line 90 ~ addItem ~ debtTotal", debtTotal)
    console.log("🚀 ~ file: BudgetView.js ~ line 90 ~ addItem ~ categoryId", categoryId)
    console.log("🚀 ~ file: BudgetView.js ~ line 90 ~ addItem ~ category", category)

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

    // console.log("🚀 ~ file: BudgetView.js ~ line 128 ~ addItem ~ category", category)
    if (category === 'Income') {
      let days = GetMonthsLastDay(); 
      
      switch (description) {
        case "Daily":
          categories[idx].budgetTotal += amt * days;
          break;
        case "Weekly":
          categories[idx].budgetTotal += amt * 4;
          break;
        case "Bi-Weekly":
          categories[idx].budgetTotal += amt * 2;
          break;
        default: // monthly or one time
          categories[idx].budgetTotal += amt;
          break;
      }
      
      alert(`Total income amount = ${categories[0].budgetTotal}
      Amount added = ${amt} for ${description}`);

    } else if (type === "Budget") {
      categories[idx].budgetTotal += amt;
    } else {
      categories[idx].expensesTotal += amt;
    }
    
    console.log("🚀 ~ file: BudgetView.js ~ line 152 ~ addItem ~ idx", idx)
    console.log("🚀 ~ file: BudgetView.js ~ line 151 ~ addItem ~ categories[idx]", categories[idx])


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
            
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>

          </AccordionDetails>

        </Accordion>
      ))}
      </BudgetContext.Provider>
      </div>
  );
}
