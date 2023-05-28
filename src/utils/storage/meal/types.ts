export type Meal = {
  mealName: string
  description: string
  date: string
  hour: string
  mealIsOnDiet: boolean
}

export type MealToStorage = {
  sectionDate: string
  data: {
    hour: string
    mealName: string
    description: string
    mealsOnDiet: boolean
  }[]
}

export type SavedMeals = MealToStorage[]
