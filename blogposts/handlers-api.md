---
title: 'Handlers API'
date: '2023-07-17'
---

Для створення API-роутів усередині /app директорії, як правило, створюється вкладена директорія /api зі своїми папками, усередині яких створюється файл під назвою route.ts.
Якщо файл знаходить на шляху /app/api/posts/, адреса запиту буде /api/posts.
Сам route.ts повинен експортувати об'єкт із функціями за іменами HTTP методів: GET, POST, DELETE тощо.
Наприклад:
export async function GET(req: Request) {
  return NextResponse.json(currentPosts);
}

### Вилучення даних

// отримання квері параметрів
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  // some logic
  return NextResponse.json(currentPosts);
}

// отримання тіла запиту
export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  return NextResponse.json({ message: "done" });
}

// отримання параметрів URL
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params?.id;
  // some logic for delete post by id
  return NextResponse.json({ id });
}

### Вбудовані функції

import { headers, cookies } from "next/headers";
export async function GET(req: Request) {
  const headersList = headers();
  const cookiesList = cookies();
  const type = headersList.get("Content-Type");
  const Cookie_1 = cookiesList.get("Cookie_1")?.value;
  return NextResponse.json({});
}

import { redirect } from "next/navigation";
export async function GET(request: Request) {
  redirect("<https://nextjs.org/>");
}
