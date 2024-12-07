interface ReducerObject {
  type: string
  payload: any
}

type Notification = {
  key: boolean;
  value: boolean;
};

interface InitStateObject {
  g_UserPhoto: string,
  g_CompanyName: string,
  g_ArtistName: string,
  g_FirstName: string,
  g_LastName: string,
  g_Email: string,
  g_AccountType: {
    key: string,
    value: string
  },
  g_Country: {
    key: string,
    value: string
  },
  g_State: {
    key: string,
    value: string
  },
  g_City: {
    key: string,
    value: string
  },
  b_CardName: string,
  b_CardNumber: string,
  b_ExpDate : string,
  b_Cvv: string,
  // n_Notification: { 
  //   [ {key: boolean,
  //     value: boolean }
  //   ]
  // } as any ,
  // Notification[] = Array.from({ length: 10 }, () => ({ key: boolean, value: boolean }));
  n_Notification:  boolean[],
  l_Language : {
    key: string,
    value: string
  },
  l_Timezone: {
    key: string,
    value: string
  },
  h_Name : string,
  h_CompanyName: string,
  h_Detail: string,
  
}