public class Solver{

    public Solver()    {    }

    public static void main(String[] args){
        int noOfQueens,row, noOfSolutions, col;
        if(args.length==1) noOfQueens=Integer.parseInt(args[0]); else noOfQueens=14;
        int minus1=noOfQueens-1;
        int[] queens=new int[noOfQueens];
        boolean[] columnOccupied=new boolean[32];
        boolean[] venstreDiagOccupied=new boolean[64];
        boolean[] hojreDiagOccupied=new boolean[64];
        long time;
        int fastLegalCounter;
        System.out.println("*************************");
        System.out.println("Queens\tSolutions\tTime(s)\tIterations");
        for(int i=1;i<=10;i++){
            time=System.currentTimeMillis();
            noOfSolutions=0;fastLegalCounter=0;row=0;col=0;
            do{            
                do{                
                    fastLegalCounter++;
                    if(columnOccupied[col] || venstreDiagOccupied[row+col] || hojreDiagOccupied[row+minus1-col]){
                        col++;
                    }else{
                        if(row>=minus1){                        
                            noOfSolutions++;col=noOfQueens;//++queens[row];
                        }else{
                            columnOccupied[col]=true;
                            venstreDiagOccupied[row+col]=true;
                            hojreDiagOccupied[row+minus1-col]=true;
                            queens[row]=col;row++;col=0;
                        }
                    }
                }while(col<noOfQueens);
                row--;
                while(row>=0){
                    col=queens[row];
                    columnOccupied[col]=false;
                    venstreDiagOccupied[row+col]=false;
                    hojreDiagOccupied[row+minus1-col]=false;
                    if((++col)==noOfQueens) row--; else break;                    
                };
            }while(row>=0);
            time=System.currentTimeMillis()-time;
            System.out.println(i+"\t"+noOfSolutions+"\t\t"+(time/1000.0)+"\t\t"+fastLegalCounter);
        }        
    }
}