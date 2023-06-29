import mongoose from 'mongoose'

async function dbConnect () {
  try {
    await mongoose.connect(process.env.DB!)
    console.log('Database working')
  } catch (error) {
    console.error(`Database not working ${error}`)
  }
}

dbConnect()
