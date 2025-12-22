
// Fix: Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface Nomination {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  criteria: string[];
}

export interface TimelineEvent {
  stage: string;
  period: string;
  description: string;
}

export interface Prize {
  rank: string;
  title: string;
  award: string;
  icon: React.ReactNode;
}