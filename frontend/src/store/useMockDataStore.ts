import { create } from 'zustand';

export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  status: 'Active' | 'On Leave' | 'Terminated';
}

interface MockDataState {
  employees: Employee[];
  addEmployee: (emp: Omit<Employee, 'id'>) => void;
  deleteEmployee: (id: string) => void;
}

const initialEmployees: Employee[] = [
  { id: '1', name: 'John Doe', email: 'john.doe@symbiosis.com', department: 'Engineering', role: 'Software Engineer', status: 'Active' },
  { id: '2', name: 'Jane Smith', email: 'jane.smith@symbiosis.com', department: 'HR', role: 'HR Manager', status: 'Active' },
  { id: '3', name: 'Robert Johnson', email: 'robert.j@symbiosis.com', department: 'Finance', role: 'Accountant', status: 'On Leave' },
  { id: '4', name: 'Emily Davis', email: 'emily.d@symbiosis.com', department: 'Sales', role: 'Sales Rep', status: 'Active' },
];

export const useMockDataStore = create<MockDataState>((set) => ({
  employees: initialEmployees,
  addEmployee: (emp) => set((state) => ({ 
    employees: [...state.employees, { ...emp, id: Math.random().toString(36).substr(2, 9) }] 
  })),
  deleteEmployee: (id) => set((state) => ({
    employees: state.employees.filter(e => e.id !== id)
  }))
}));
