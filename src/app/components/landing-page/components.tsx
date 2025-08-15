'use client';

import {
  Box,
  BoxProps,
  ButtonProps,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from '@mui/material';
import {
  BookDemoBtn,
  GetStartedBtn,
  JoinDiscordBtn,
  PrimaryBtn,
  TypoB2Medium,
} from '@/app/components/common';
import { ComponentProps, FC, useState } from 'react';
import Image from 'next/image';

export const PageMain = ({ children }: { children: React.ReactNode }) => {
  return <main className="h-[100%] text-white">{children}</main>;
};

export const PageSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={`pt-24 relative ${className}`}>{children}</section>;
};

export const PageSectionBackgroundContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`absolute top-0 left-0 right-0 bottom-0 overflow-clip ${className}`}>
      {children}
    </div>
  );
};

export const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`max-w-7xl mx-auto ${className}`}>
      <div className="text-center">{children}</div>
    </div>
  );
};

export const Pill = ({
  children,
  variant = 'blue',
}: {
  children: React.ReactNode;
  variant?: 'purple' | 'blue';
}) => {
  const blueBg = 'border-[#0E8BFF] text-[#29B6F6] bg-[rgba(21,137,254,0.13)]';
  const blueGradient =
    'bg-gradient-to-r from-[#07F] from-2.25% via-[#33C2FF] via-28.08% to-[#A6DDFF] to-100%';

  const purpleBg = 'border-[#8A3391] text-[#8A49FF] bg-[rgba(21,137,254,0.13)]';
  const purpleGradient = 'bg-gradient-to-r from-[#803994ED] from-0.4% to-[#30819DED] to-98.3%';

  const bgClasses = variant === 'blue' ? blueBg : purpleBg;
  const gradientClasses = variant === 'blue' ? blueGradient : purpleGradient;

  return (
    <Box
      className={`inline-flex items-center gap-2 border-2 ${bgClasses} p-2.5 rounded-[300px] hover:bg-[rgba(13,71,161,0.4)] transition-colors`}
    >
      <TypoB2Medium className={`bg-clip-text text-transparent ${gradientClasses}`}>
        {children}
      </TypoB2Medium>
    </Box>
  );
};

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="text-7xl font-bold mb-8 bg-gradient-to-b from-white to-gray-100 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-gray-400 text-xl leading-relaxed">{subtitle}</p>}
    </>
  );
};

export const BlurCard = ({ children, className }: BoxProps) => {
  return (
    <Box
      className={`rounded-2xl border border-[#424242] bg-[rgba(23,23,23,0.23)] backdrop-blur-[20px] p-8 ${className}`}
    >
      {children}
    </Box>
  );
};

export const JoinBetaBtn: FC<ButtonProps & ComponentProps<'a'>> = ({ ...props }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PrimaryBtn onClick={() => setOpen(true)} {...props} />
      <BetaDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export const BetaReleaseCard: FC = () => {
  return (
    <>
      <Stack className={`rounded-2xl bg-[#2F2F2F] px-6 py-3 gap-3 min-w-[700px]`}>
        <Typography className={'text-xl font-medium'}>Beta Release</Typography>
        <Typography className={'text-base font-medium text-text-secondary'}>
          We&apos;re in public beta! Join our early access program today.
        </Typography>
        <Stack className="flex-row items-center gap-3">
          <JoinBetaBtn>Join Beta</JoinBetaBtn>
          <BookDemoBtn>Book a Demo</BookDemoBtn>
          <JoinDiscordBtn className="text-text-secondary">Discord</JoinDiscordBtn>
        </Stack>
      </Stack>
    </>
  );
};

interface IBetaDialog {
  open: boolean;
  onClose: () => void;
}

const BetaDialog: FC<IBetaDialog> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        className: 'rounded-2xl max-w-[560px]',
      }}
    >
      <Box className="relative overflow-hidden  p-8 bg-[#332700]">
        <img
          src="/images/landing-page/hand-pattern.svg"
          className="absolute w-[182px] aspect-square -top-7 left-0"
        />
        <img
          src="/images/landing-page/hand-pattern.svg"
          className="absolute w-[182px] aspect-square -top-32 right-20"
        />
        <img
          src="/images/landing-page/hand-pattern.svg"
          className="absolute w-[182px] aspect-square -bottom-24 -right-12"
        />
        <Stack className="flex-row items-start justify-center gap-2">
          <Image src="/images/header-logo.svg" width={67} height={77} alt="Logo" />
          <Box className="bg-[#0064EB] rounded-full px-4 py-1">Beta</Box>
        </Stack>
      </Box>

      <DialogContent className="p-8 text-center flex flex-col gap-3 bg-[#1C1C1C]">
        <Typography className="text-4xl font-semibold">Join Our Beta Program</Typography>
        <Typography className="text-base font-medium">
          Thank you for your interest in our beta program! We&apos;re excited to have you try out
          our platform and be among the first to experience our innovative features.
        </Typography>
        <Typography className="text-base font-medium">
          By joining our beta program, you&apos;ll get early access to new features and the
          opportunity to help shape the future of our platform.
        </Typography>
        <GetStartedBtn className="w-full mt-5">Sign Up & Join Beta</GetStartedBtn>
      </DialogContent>
    </Dialog>
  );
};
