// // app/page.tsx

// "use client";

// import useCounterStore from "../stores/useCounterStore";
// import useAuthStore from "../stores/useAuthStore";

// const Home = () => {
//   const { count, increment, decrement } = useCounterStore();
//   const { isAuthenticated, email, login, logout } = useAuthStore();

//   const handleIncrement = () => {
//     if (!isAuthenticated) {
//       alert("로그인하지 않으면 추가할 수 없습니다.");
//       return;
//     }
//     increment();
//   };

//   const handleDecrement = () => {
//     if (!isAuthenticated) {
//       alert("로그인하지 않으면 제거할 수 없습니다.");
//       return;
//     }
//     decrement();
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">장바구니</h1>

//       {/* 유저 정보 */}
//       <div className="bg-gray-50 p-4 rounded-lg mb-6">
//         <h2 className="text-xl font-semibold mb-4">유저 정보</h2>
//         {isAuthenticated ? (
//           <div className="space-y-2">
//             <p className="text-gray-700">로그인됨: {email}</p>
//             <button
//               onClick={() => logout()}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               로그아웃
//             </button>
//           </div>
//         ) : (
//           <div className="space-y-2">
//             <p className="text-gray-700">로그인되지 않음</p>
//             <button
//               onClick={() => login("user@example.com")}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               로그인
//             </button>
//           </div>
//         )}
//       </div>

//       {/* 장바구니 상품 개수 */}
//       <div className="bg-gray-50 p-4 rounded-lg">
//         <h2 className="text-xl font-semibold mb-4">장바구니 상품</h2>
//         <p className="text-gray-700 mb-4">상품 개수: {count}</p>
//         <div className="space-x-2">
//           <button
//             onClick={handleIncrement}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             추가
//           </button>
//           <button
//             onClick={handleDecrement}
//             disabled={count === 0}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
//           >
//             제거
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// //react query => api 요청 후에 데이터를 자동으로 state에 넣어주는 놈
// // 서버 상태관리 라이브러리 ->
// //원래는 새로고침 전에는 새로운 데이터를 가져오지 않는다.
// //api를 주기적으로 자동 요청해준다 -> 새로운 데이터로 교체한다 -> 서버 데이터 상태와 대부분 일치하게 만들어준다

// src/app/page.tsx

// "use client"
// import { useEffect, useState } from "react";
// import axios from "axios";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// export default function Home() {
//   const [data, setData] = useState<Post[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/posts/1");
//         setData(response.data);
//       } catch {
//         setError("데이터를 불러오는데 실패했습니다.");
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <ul>
//       {data.map((item) => (
//         <li key={item.id} className="border p-4">
//           <h3 className="font-bold">
//             {item.id}: {item.title}
//           </h3>
//           <p>{item.body}</p>
//         </li>
//       ))}
//          {error && <p className="text-red-500">{error}</p>}
//     </ul>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
// };

// export default function Home() {
//   const [data, setData] = useState<Post | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/posts/1");
//         setData(response.data);
//       } catch {
//         setError("데이터를 불러오는데 실패했습니다.");
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <ul>
//       {data && (
//         <li key={data.id} className="border p-4">
//           <h3 className="font-bold">
//             {data.id}: {data.title}
//           </h3>
//           <p>{data.body}</p>
//         </li>
//       )}
//       {error && <p className="text-red-500">{error}</p>}
//     </ul>
//   );
// }

//============playwright===========================

export default function Home() {
  const a = 'a';
  return <h1>게시글 목록</h1>;
}
