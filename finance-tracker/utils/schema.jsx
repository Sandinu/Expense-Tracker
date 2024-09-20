/*A database schema is a blueprint that defines the structure and organization of a database, including how data is stored and organized, and how different elements relate to each other. 
A database schema's key components include:
Tables, Columns, Constraints, Relationships, Data types, Fields, Views, Indexes, and Stored procedures.*/

import {integer,numeric,pgTable,serial,varchar} from 'drizzle-orm/pg-core'

//budget schema

export const Budgets = pgTable('budgets',{
    id: serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    Icon : varchar('icon'),
    createdBy : varchar('createdBy').notNull(),
})

//income schema

export const Incomes = pgTable('incomes' ,{
    id: serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    Icon : varchar('icon'),
    createdBy : varchar('createdBy').notNull(),
})

//expenses schema
export const Expenses = pgTable('expenses' ,{
    id: serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    budgetID : integer ('budgetID').references(() => Budgets.id),
    createdBy : varchar('createdBy').notNull(),
})