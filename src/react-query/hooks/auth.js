import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../queryKeys";
import {
  idCheck,
  phoneCheck,
  logIn,
  register,
  searchId,
  searchPw,
  logout,
} from "@/api/auth";
import axios from "axios";

// 로그인
export function useSignIn() {
  const queryClient = useQueryClient();
  const mutation = useMutation(logIn);

  return {
    signIn: async ({ address }) => {
      try {
        const data = await mutation.mutateAsync({ address });
        // user 키 업데이트

        // queryClient.setQueryData([queryKeys.user], address);

        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    signInError: mutation.isError,
    signInLoading: mutation.isLoading,
  };
}

// 로그아웃
export function useSignOut() {
  const queryClient = useQueryClient();
  queryClient.setQueryData([queryKeys.user], undefined);
  const mutation = useMutation(logout);
  return {
    signOut: async () => {
      await mutation.mutateAsync();
      // user 키 업데이트
    },
  };
}

// ID 중복체크
export function useIdCheck() {
  const mutation = useMutation(idCheck);

  return {
    checkId: async ({ id }) => {
      try {
        const data = await mutation.mutateAsync({ id });

        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    idCheckError: mutation.isError,
    idCheckLoading: mutation.isLoading,
  };
}

// phone 중복체크
export function usePhoneCheck() {
  const mutation = useMutation(phoneCheck);

  return {
    checkPhone: async ({ name, phone }) => {
      try {
        const data = await mutation.mutateAsync({ name, phone });

        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    phoneCheckError: mutation.isError,
    phoneCheckLoading: mutation.isLoading,
  };
}

// 회원가입
export function useSignUp() {
  const mutation = useMutation(register);

  return {
    signUp: async (params) => {
      try {
        const data = await mutation.mutateAsync(params);
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    signUpError: mutation.isError,
    signUpLoading: mutation.isLoading,
  };
}

// 아이디 찾기
export function useFindId() {
  const mutation = useMutation(searchId);

  return {
    findId: async (params) => {
      try {
        const data = await mutation.mutateAsync(params);
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    findIdError: mutation.isError,
    findIdLoading: mutation.isLoading,
  };
}
// 비밀번호 찾기
export function useFindPw() {
  const mutation = useMutation(searchPw);

  return {
    findPw: async (params) => {
      try {
        const data = await mutation.mutateAsync(params);
        return { ...data };
      } catch (err) {
        return { ...err.response?.data };
      }
    },
    findPwError: mutation.isError,
    findPwLoading: mutation.isLoading,
  };
}
