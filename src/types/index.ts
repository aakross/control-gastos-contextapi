export type Expense = {
  id: string;
  expenseName: string;
  amount: number;
  category: string;
  date: Value;
};

export type DraftExpnese = Omit<Expense, "id">;

type valuePiece = Date | null;
export type Value = valuePiece | [valuePiece, valuePiece];

export type Category = {
  id: string;
  name: string;
  icon: string;
};
