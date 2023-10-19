import { createContext } from "react";
import { NewsContextType } from "../types/Type";

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
