// import { NextResponse } from 'next/server';
// import { hash } from 'bcrypt';
// // import { prisma } from '@/lib/prisma';

// export async function POST(request: Request) {
//   try {
//     const { name, email, password } = await request.json();

//     // Validate the data
//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { error: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Check if user already exists
//     const existingUser = await prisma.user.findUnique({
//       where: { email },
//     });

//     if (existingUser) {
//       return NextResponse.json(
//         { error: 'User already exists' },
//         { status: 400 }
//       );
//     }

//     // Hash the password
//     const hashedPassword = await hash(password, 10);

//     // Create the user
//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     // Return the user without the password
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const { password: _ , ...userWithoutPassword } = user;
//     return NextResponse.json(userWithoutPassword);

    
//   } catch (error) {
//     console.error('Signup error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }