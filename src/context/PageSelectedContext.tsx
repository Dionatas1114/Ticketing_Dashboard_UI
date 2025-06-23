import React, { createContext, useState } from 'react';

type PageSelectedContextType = {
  pageSelected: string;
  setPageSelected: React.Dispatch<React.SetStateAction<string>>;
};

const PageSelectedContext = createContext<PageSelectedContextType | undefined>(undefined);

const homePage = 'Home';

export const PageSelectedProvider = ({ children }: ChildrenProps) => {
  const [pageSelected, setPageSelected] = useState<string>(homePage);

  return (
    <PageSelectedContext.Provider value={{ pageSelected, setPageSelected }}>
      {children}
    </PageSelectedContext.Provider>
  );
};

export default PageSelectedContext;
