import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';

const App = () => {

const columns = [
  {
    name: "title",
    label: "タイトル",
    options: {
     filter: false,
     sort: false,
    }
   },
  {
   name: "description",
   label: "内容",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "category",
   label: "Category",
   options: {
    filter: true,
    sort: true,
   }
  },
  {
   name: "price",
   label: "値段($)",
   options: {
    filter: false,
    sort: false,
   }
  },
  {
  name: "rating",
  label: "Rating",
  options: {
    filter: false,
   sort: false,
  }
 },
 {
  name: "discountPercentage",
  label: "割引(%)",
  options: {
    filter: false,
   sort: false,
  }
 },
 ];
 


const options = {
//   elevation : false,
// this code line for drop-shadow
  rowsPerPage : 8,
  rowsPerPageOptions : [8, 10, 15, 20, 50],
  filterType: 'multiselect',
};

//css styled START

const getMuiTheme = () => 
  createTheme({
    typography : {
      fontFamily: 'Noto sans JP',
    },
    palette: {
      background:  {
        paper: 'white',
        default: '#ffffff'
      },
      //mode: 'dark'
    },
    components: {
      MuiTableCell : {
        styleOverrides: {

        //head for column head
          head: {
            padding: '8px 10px',
          },
          // body for row or table body
          body : {
            padding: '4px 12px',
          }
        }
      }
    }
  })

  //css styled END


  const [products, setProducts] = useState([]);

  const handleFetch = async () => {
    return await fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data?.products)
        setProducts(data?.products);
      })
  }
  
  useEffect(() => {
    handleFetch();   
  },[])

  return (
    <div className='bg-slate-100 py-10 min-h-screen grid place-items-center'>
      <div className='w-[95%]'>
       <ThemeProvider theme={getMuiTheme()}>
       <MUIDataTable
          title={"会社の情報"}
          data={products}
          columns={columns}
          options={options}
        />
       </ThemeProvider>
      </div>

    </div>
  )
}

export default App