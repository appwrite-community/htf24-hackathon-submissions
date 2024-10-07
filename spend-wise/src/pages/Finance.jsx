import React from 'react'
import { Card } from '../components'

const Finance = () => {
  return (
    <div className="bg-gray-100 p-8 my-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Money Saving Tips</h1>

        <Card 
        title='1. Create a Budget'
        text='Start by creating a monthly budget to track your income and expenses. This will help you identify areas where you can cut back and save more money.'
        />

        <Card
        title='2. Cook at Home'
        text="Eating out can be expensive. Try cooking at home more often to save money on dining expenses. You'll also have more control over your ingredients and portions."
        />

        <Card
        title='3. Set Savings Goals'
        text="Define clear savings goals for short-term and long-term objectives. Having specific goals makes it easier to stay motivated and focused on saving money."
        />

        <Card
        title='4. Use Cash Instead of Cards'
        text="Consider using cash for your daily expenses. It helps you become more aware of your spending and reduces the temptation to make impulsive purchases with credit or debit cards."
        />

        <Card
        title='5. Shop Smart and Compare Prices'
        text="Before making a purchase, compare prices online and in different stores. Look for discounts, coupons, and cashback offers to ensure you get the best deals on your purchases."
        />

        <Card
        title='6. Cancel Unnecessary Subscriptions'
        text="Review your monthly subscriptions and cancel any services you no longer use or need. This can free up extra money in your budget."
        />

      </div>
    </div>
    // TODO: Make the finance page
  )
}

export default Finance