import { NextResponse } from 'next/server';

import { CHATS_LIST } from '@/lib/api/api.constants';

export function GET(): NextResponse {
  return NextResponse.json(CHATS_LIST);
}
