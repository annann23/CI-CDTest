// import { fireEvent, render, screen } from "@testing-library/react";

// import CartPage from "./page";
// import useCounterStore from "@/stores/useCounterStore";

// describe("CartPage 컴포넌트 테스트", () => {

//     beforeEach(() => {
//       useCounterStore.setState({ count: 0 });
//     });

//   test("로그인하지 않은 상태에서 추가 버튼 클릭 시 경고하는 alert가 호출되는지 확인", () => {
//     const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
//     render(<CartPage/>);

//     const addButton = screen.getByRole("button", {name: "추가"});
//     fireEvent.click(addButton);

//     expect(alertMock).toHaveBeenCalledWith("로그인하지 않으면 추가할 수 없습니다.");
//     alertMock.mockRestore();
//   })

//   test("로그인 후 추가 버튼 클릭 시 count 증가되는지 확인", () => {
//     render(<CartPage/>);

//     const loginButton = screen.getByRole("button", {name: '로그인'});
//     fireEvent.click(loginButton);
//     expect(screen.getByText("로그인됨: user@example.com")).toBeInTheDocument();

//     const addButton = screen.getByRole("button", { name: "추가" });
//     fireEvent.click(addButton);

//     expect(screen.getByText("상품 개수: 1")).toBeInTheDocument();
//   });

//   test("상품이 0개일 때 제거 버튼 비활성화", () => {
//     render(<CartPage />);

//     const removeButton = screen.getByRole("button", { name: "제거" });
//     expect(removeButton).toBeDisabled();
//   })

//   test("상품 추가(로그인된 상태) 후 제거 시 count 감소", () => {
//     render(<CartPage />);

//     const loginButton = screen.getByRole("button", {name: '로그인'});
//     fireEvent.click(loginButton);
//     expect(screen.getByText("로그인됨: user@example.com")).toBeInTheDocument();

//     const addButton = screen.getByRole("button", { name: "추가" });
//     fireEvent.click(addButton);
//     fireEvent.click(addButton);

//     const removeButton = screen.getByRole("button", { name: "제거" });
//     fireEvent.click(removeButton);

//     expect(screen.getByText("상품 개수: 1")).toBeInTheDocument();
//   });
// })

// // src/app/page.test.tsx msw 테스트

// import { render, screen } from "@testing-library/react";
// import Home from "./page";

// describe("MSW 모킹 테스트", () => {
//   test("fetch API 모킹 테스트", async () => {
//     render(<Home />);

//     const postListItems = await screen.findAllByRole("listitem");
//     // MSW에 모킹된 데이터는 2개
//     expect(postListItems).toHaveLength(2);

//     // MSW에서 설정한 결과값이 화면에 잘 나오는지 확인
//     expect(screen.getByText("1: 첫 번째 게시글")).toBeInTheDocument();
//     expect(screen.getByText("2: 두 번째 게시글")).toBeInTheDocument();
//   });
// });

// src/app/page.test.tsx

import { render, screen } from "@testing-library/react";
import Home from "./page";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("MSW 모킹 테스트", () => {
  test("MSW 상세 데이터 모킹", async () => {
    render(<Home />);

    const postItem = await screen.findByText("1: 첫 번째 게시글");

    // MSW에서 설정한 결과값이 화면에 잘 나오는지 확인
    expect(postItem).toBeInTheDocument();
  });
  test("네트워크 에러 발생 시 모킹 테스트", async () => {
    server.use(
      http.get("http://localhost:4000/posts/1", () => {
        return HttpResponse.error();
      })
    );

    render(<Home />);

    const errorMessage = await screen.findByText(
      "데이터를 불러오는데 실패했습니다."
    );

    // 에러 메시지가 화면에 잘 나오는지 확인
    expect(errorMessage).toBeInTheDocument();
  });

  test("서버 에러 시 모킹 테스트", async () => {
    server.use(
      http.get("http://localhost:4000/posts/1", () => {
        // 백엔드에서 반환하는 값은 없고 (null)
        // 상태 코드가 500으로 반환 -> catch 블록으로 이동
        return HttpResponse.json(null, { status: 500 });
      })
    );

    render(<Home />);

    const errorMessage = await screen.findByText(
      "데이터를 불러오는데 실패했습니다."
    );

    // 에러 메시지가 화면에 잘 나오는지 확인
    expect(errorMessage).toBeInTheDocument();
  });
});
