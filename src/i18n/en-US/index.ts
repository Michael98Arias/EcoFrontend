// Texts in the English language.

export default {
  error: {
    notFound: 'Oops. Nothing here...',
    withoutPermission: "Sorry, you don't have permissions.",
    labelButton: 'Go Home',
  },
  buttons: {
    accept: 'Accept',
    cancel: 'Cancel',
    update: 'Update',
    create: 'Create',
    delete: 'Delete',
    enable: 'Enable',
    downloadFile: 'Download the File',
    shopNow: 'Shop Now ->',
    logOut: 'Log Out',
    toggle: {
      showAll: 'Show All',
      active: 'Show Active',
      inactive: 'Show Inactive',
    }
  },
  globalMessages: {
    wait: 'Wait a Moment Please...',
    successfulChange: 'Updated Successfully!',
    successfulCreate: 'Successfully Created!',
    errorApi: 'Something Unexpected Happened Try Again.',
    errorNotFound: 'User Not Found.',
    errorDisabled: 'Disabled User.',
    confirm: 'Are You Sure?',
    enable: 'Will Be Enabled: ',
    delete: 'Will Be Eliminated: ',
    required: 'Enter the Required Information.',
    minLengthRule: 'This Field Must Be at Least {min} Characters',
    maxLengthRule: 'This Field Must Be No More Than {max} Characters',
    titleNew: 'Create New',
    titleUpdate: 'Update',
  },
  layout: {
    mainLayout: {
      header: {
        home: 'Home',
        shop: 'Shop',
        about: 'About',
      },
      home: {
        images: {
          titlePhotoOne: 'Make Your Space a Reflection of Your Style.',
          titlePhotoTwo: 'Create Moments Worth Remembering with Our Exquisite Furniture Collection.',
          titlePhotoThree: 'Elevate Your Living Experience with Furniture That Speaks Volumes.',
          titlePhotoFour: 'Transform Your Home with Inspiring Furniture in Every Corner.',
        },
      },
      loginPage: {
        titles: {
          logIn: 'Log In',
          createAccount: 'Create Account',
          userType: 'Select a User Type:',
        },
      },
      shop: {
        categorias: {
          bedrooms: 'Bedrooms',
          offices: 'Offices',
          kitchens: 'Kitchens',
          decorAndAccessories: 'Decor & Accessories',
        },
      },
    },
    mainLayoutUsers: {
      sideBar: {
        title: 'CRM Panel',
        options: {
          analysis: {
            title: 'Analysis',
          },
          users: {
            title: 'Users',
            pageUsers: {
              cards: {
                overall: 'Total',
                admin: {
                  titles: 'Administrators',
                  title: 'Administrator',
                  buttonAction: 'See Administrators Table',
                },
                seller: {
                  titles: 'Sellers',
                  title: 'Seller',
                  buttonAction: 'See Sellers Table',
                },
                customer: {
                  titles: 'Customers',
                  title: 'Customer',
                  buttonAction: 'See Customers Table',
                },
              },
              dialog: {
                options: {
                  name: 'Full Name',
                  username: 'Username',
                  hintName: 'Name and Surname',
                  email: 'Email',
                  password: 'Password',
                  updatePassword: 'Update Password',
                  role: 'Role',
                  state: 'State',
                  creationDate: 'Creation Date',
                  updateDate: 'Update Date',
                  emailRule: 'Please Enter a Valid Email Address',
                  passwordRule: 'Password Must Be at Least 8 Characters and Include a Number, an Uppercase Letter, and a Special Character',
                },
              },
            },
          },
          products: {
            title: 'Products',
            pageProducts: {
              cards: {
                overall: 'Total',
                category: {
                  titles: 'Categories',
                  title: 'Category',
                  buttonAction: 'See Categories Table',
                },
                product: {
                  titles: 'Products',
                  title: 'Product',
                  buttonAction: 'See Products Table',
                }
              },
              dialog: {
                options: {
                  name: 'Name',
                  usernameSeller: 'Username',
                  hintName: 'Unique Name',
                  categoryName: 'Category',
                  description: 'Description',
                  amount: 'Amount',
                  price: 'Price',
                  state: 'State',
                  creationDate: 'Creation Date',
                  updateDate: 'Update Date',
                  actions: 'Actions',
                  nameRule: 'Be Sure to Enter a Name That Is Not Already in Use.',
                },
              },
            }
          },
          sales: {
            title: 'Sales',
            pageSales: {
              
            }
          },
          marketing: {
            title: 'Marketing',
            pageMarketing: {
              cards: {
                overall: 'Total',
                channel: {
                  titles: 'Channels',
                  title: 'Channel',
                  buttonAction: 'See Channels Table',
                },
                campaign: {
                  titles: 'Campaigns',
                  title: 'Campaign',
                  buttonAction: 'See Campaigns Table',
                },
              },
              dialog: {
                titleNew: 'Create New',
                options: {
                  name: 'Campaign Name',
                  hintName: 'Unique Name',
                  startDate: 'Start Date',
                  endDate: 'End Date',
                  hintTotalDays: 'Total Days:{days}',
                  category: 'Category',
                  selectCategory: 'Select a Category',
                  discount: 'Discount',
                  numberDiscount:'The number must be between 1 and 100.',
                  conditions: 'Conditions',
                  marketingChannel: 'Marketing Channel',
                  state: 'State',
                  creationDate: 'Creation Date',
                  updateDate: 'Update Date',
                  actions: 'Actions',
                  nameRule: 'Be Sure to Enter a Name That Is Not Already in Use.',
                },
              },
            }
          },
          reports: {
            title: 'Reports',
            pageMarketing: {
              
            }
          },
        },
      },
    },
  },
};
