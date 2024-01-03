import { Meta } from '@storybook/react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { signIn } from 'next-auth/react';
import { CloseIcon, GoogleIcon, AppleIcon, ArrowRightIcon } from '../icons';

export default {
  title: 'Dialog',
  component: Dialog,
} as Meta;

export const Login = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="text-gray-700 border flex justify-center border-border-primary gap-[2px] rounded-3xl px-[16px] py-[10px] hover:text-orange cursor-pointer">
          login
        </div>
      </DialogTrigger>
      <DialogContent className="flex min-w-[900px] flex-col items-center gap-10 shrink-0 p-14 rounded-[20px]">
        <DialogHeader className="flex flex-col items-center gap-3">
          <DialogTitle className="self-stretch text-heading text-center text-[40px] not-italic font-bold leading-[48px]">
            Login
          </DialogTitle>
          <DialogDescription className="self-stretch text-primary text-lg not-italic font-normal leading-6">
            Create an account to keep track of JKYog Online classes and events.
          </DialogDescription>

          <DialogClose asChild>
            <div className="flex items-center gap-2.5 absolute p-3.5 rounded-[100px] right-6 top-6 cursor-pointer bg-section-bg">
              <CloseIcon />
            </div>
          </DialogClose>
        </DialogHeader>
        {/* social */}
        <div className="flex w-[354px] flex-col items-start gap-4">
          <div
            className="flex hover:cursor-pointer items-center gap-3 self-stretch border pl-20 pr-10 py-2.5 rounded-[56px] border-solid border-border-primary"
            onClick={() => signIn('google')}
          >
            <div className="bg-white w-[32px] h-[32px] flex items-center justify-center rounded-full">
              <GoogleIcon />
            </div>
            <p>Sign In with Google</p>
          </div>

          <div className="flex items-center gap-3 hover:cursor-pointer self-stretch border pl-20 pr-10 py-2.5 rounded-[56px] border-solid border-border-primary">
            <div className="bg-black w-[32px] h-[32px] flex items-center justify-center rounded-full">
              <AppleIcon />
            </div>
            <p>Sign In with Google</p>
          </div>

          <div className="flex justify-center items-center gap-3 self-stretch">
            <div className="w-[157px] h-[1px] bg-border-primary"></div>
            <p>or</p>
            <div className="w-[157px] h-[1px] bg-border-primary"></div>
          </div>
          {/* content */}
          <div className="flex w-[346px] justify-between items-center pl-5 pr-2 py-2 rounded-[56px] border-[1.25px] border-solid border-border-primary bg-transparent">
            <input type="text" placeholder="enter your email address" className="bg-transparent" />
            <div className="flex flex-end items-center gap-2.5 p-3 rounded-[100px] bg-button-primary">
              <ArrowRightIcon className="h-4 w-4 fill-white" />
            </div>
          </div>
        </div>
        <p className="text-primary text-base not-italic font-normal leading-6">
          By clicking on Continue, you accept our{' '}
          <span className="text-button-primary underline">Terms of Service</span> and{' '}
          <span className="text-button-primary underline">Privacy Policy</span>
        </p>
        <p className="text-primary text-base not-italic font-normal leading-6">
          Already have an account? <span className="text-button-primary underline">Sign In</span>
        </p>
      </DialogContent>
    </Dialog>
  ),
};
