{$H-,$I+,$OBJECTCHECKS-,$Q-,$R-,$S-}
uses crt,sysutils;
var noOfQueens,minus1:shortint;
    queens:array [0..32] of shortint;
    noOfSolutions:Longint;
    LegalCounter:longint;
    fastLegalCounter:int64;
    tid:tdatetime;
    sek:double;
    h,m,s,s1000,i:word;
    columnOccupied:array[0..32] of Boolean;
    venstreDiagOccupied, hojreDiagOccupied:array[0..64] of Boolean;

procedure fasterpositionqueens;assembler;
asm
        pushad
        fld1
        mov ebx,0
        mov eax,255*256
        mov edi,0
        fldz
        mov ecx,0
        mov edx,0
        mov ebp,0
        mov esi,0
        add ah,[noofqueens]
        mov bl,ah
        jmp @NyRaekke
@Igen2:
        cmp byte ptr [hojreDiagoccupied+ebx+ecx],ah
        bt ebp,eax
        lea esi,[ecx+eax]
        fadd st(0),st(1)
        jbe @inccol
        bt edi,esi
        jnc @Opad
@inccol:
        sub bl,1
        inc eax
        jnc @Igen2
@Videre:
        dec ecx
        js @Slut
        mov al,[queens+ecx]
        mov bl,ah
        lea esi,[ecx+eax]
        sub bl,al
        btr ebp,eax
        btr edi,esi
        mov byte ptr [hojreDiagoccupied+ebx+ecx],ch
        je @Videre
        inc eax
        dec ebx
        jecxz @NyRaekke
        jmp @Igen2
@Opad:
        cmp cl,ah
        jb @NyRaekke
        inc edx
        jmp @Videre
@NyRaekke:
        lea esi,[ecx+eax]
        mov byte ptr [hojreDiagoccupied+ebx+ecx],ah
        mov [queens+ecx],al
        bts edi,esi
        inc ecx
        bts ebp,eax
        mov bl,ah
        mov al,0
        jmp @Igen2
@Slut:
        fistp qword ptr [fastlegalcounter]
        mov dword ptr [noOfSolutions],edx
        ffree st(0)
        popad
End ['eax','ebx','ecx','edx','esi','edi','ebp'];

procedure PositionQueens;
label Igen2,NyRaekke,Videre;
var row, col: longint;
begin
row := 0;col := 0;noOfSolutions := 0;
minus1 := noOfQueens - 1; LegalCounter := 0;
Igen2:
inc(LegalCounter);
If columnOccupied[col] or venstreDiagOccupied[row + col] or hojreDiagOccupied[row + minus1 - col] Then begin
  Inc(col);
  if col<noofqueens then goto Igen2 else goto Videre
end;
If row >= minus1 Then begin
  inc(noOfSolutions);
  goto Videre;
end;
NyRaekke:
columnOccupied[col] := True;
venstreDiagOccupied[row + col] := True;
hojreDiagOccupied[row + minus1 - col] := True;
queens[row] := col;
inc(row);
col:=0;
goto Igen2;
Videre:
If row > 0 Then begin
  dec(row);
  col:=queens[row];
  columnOccupied[col] := False;
  venstreDiagOccupied[row + col] := False;
  hojreDiagOccupied[row + minus1 -col] := False;
  if col=minus1 then goto Videre;
  inc(col);
  If row = 0 Then GoTo NyRaekke else goto Igen2;
End
End;

procedure findNoOfSolutions(it:shortint);
var i: shortint;
begin
writeln('*************************');
writeln( 'Queens\tSolutions\tTime(ms)\tSolutions/ms');
For i := 1 To it do begin
  tid:=time;
  PositionQueens;
  sek:=(time-tid);decodetime(sek,h,m,s,s1000);
  sek:=h*3600+m*60+s+s1000/1000;
  writeln('Q', i,' ', noOfSolutions,' ', sek:3:3,' ', LegalCounter);
  tid:=time;
  fasterPositionQueens;
  sek:=(time-tid);decodetime(sek,h,m,s,s1000);
  sek:=h*3600+m*60+s+s1000/1000;
  writeln('FQ', i,' ', noOfSolutions,' ', sek:3:3,' ', fastLegalCounter);
end;
writeln( '***********************' );
End;

begin
if paramcount=1 then val(paramstr(1),noOfQueens) else noOfQueens := 14;
findNoOfSolutions( 10)
end.
