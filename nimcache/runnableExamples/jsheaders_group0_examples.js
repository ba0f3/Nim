/* Generated by the Nim Compiler v1.5.1 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555111 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555103 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555105 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI503316505 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI503316514 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555887 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555066 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555148 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555147 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555095 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555096 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555107 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI33555107 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555107.node = NNI33555107;
var NNI33555096 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555096.node = NNI33555096;
NTI33555147.base = NTI33555095;
NTI33555148.base = NTI33555095;
var NNI33555095 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555147, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555148, name: "up", sons: null}]};
NTI33555095.node = NNI33555095;
var NNI33555066 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555066.node = NNI33555066;
NTI33555095.base = NTI33555066;
NTI33555096.base = NTI33555095;
NTI33555107.base = NTI33555096;
var NNI33555887 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554440, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554456, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554440, name: "Field2", sons: null}]};
NTI33555887.node = NNI33555887;
var NNI503316514 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "a", len: 0, typ: NTI503316505, name: "a", sons: null}, 
{kind: 1, offset: "b", len: 0, typ: NTI33554456, name: "b", sons: null}]};
NTI503316514.node = NNI503316514;
var NNI33555105 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555105.node = NNI33555105;
var NNI33555103 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555103.node = NNI33555103;
NTI33555103.base = NTI33555096;
NTI33555105.base = NTI33555103;
var NNI33555111 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555111.node = NNI33555111;
NTI33555111.base = NTI33555096;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557140, src_33557141, ti_33557142) {
  var result_33557151 = null;

    switch (ti_33557142.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557131(ti_33557142))) {
      result_33557151 = src_33557141;
      }
      else {
        result_33557151 = [src_33557141[0], src_33557141[1]];
      }
      
      break;
    case 19:
            if (dest_33557140 === null || dest_33557140 === undefined) {
        dest_33557140 = {};
      }
      else {
        for (var key in dest_33557140) { delete dest_33557140[key]; }
      }
      for (var key in src_33557141) { dest_33557140[key] = src_33557141[key]; }
      result_33557151 = dest_33557140;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557142.base == null))) {
      result_33557151 = nimCopy(dest_33557140, src_33557141, ti_33557142.base);
      }
      else {
      if ((ti_33557142.kind == 17)) {
      result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {m_type: ti_33557142} : dest_33557140;
      }
      else {
        result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {} : dest_33557140;
      }
      }
      nimCopyAux(result_33557151, src_33557141, ti_33557142.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557141 === null) {
        result_33557151 = null;
      }
      else {
        if (dest_33557140 === null || dest_33557140 === undefined) {
          dest_33557140 = new Array(src_33557141.length);
        }
        else {
          dest_33557140.length = src_33557141.length;
        }
        result_33557151 = dest_33557140;
        for (var i = 0; i < src_33557141.length; ++i) {
          result_33557151[i] = nimCopy(result_33557151[i], src_33557141[i], ti_33557142.base);
        }
      }
    
      break;
    case 28:
            if (src_33557141 !== null) {
        result_33557151 = src_33557141.slice(0);
      }
    
      break;
    default: 
      result_33557151 = src_33557141;
      break;
    }

  return result_33557151;

}

function makeNimstrLit(c_33556798) {
      var result = [];
  for (var i = 0; i < c_33556798.length; ++i) {
    result[i] = c_33556798.charCodeAt(i);
  }
  return result;
  

  
}

function arrayConstr(len_33557179, value_33557180, typ_33557181) {
        var result = new Array(len_33557179);
    for (var i = 0; i < len_33557179; ++i) result[i] = nimCopy(null, value_33557180, typ_33557181);
    return result;
  

  
}

function cstrToNimstr(c_33556801) {
      var ln = c_33556801.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556801.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556801.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556804) {
                    var Temporary5;
            var Temporary7;

  var result_33556805 = null;

    var res_33556839 = newSeq_33556822((s_33556804).length);
    var i_33556840 = 0;
    var j_33556841 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556840 < (s_33556804).length)) break Label2;
          var c_33556842 = s_33556804[i_33556840];
          if ((c_33556842 < 128)) {
          res_33556839[j_33556841] = String.fromCharCode(c_33556842);
          i_33556840 += 1;
          }
          else {
            var helper_33556854 = newSeq_33556822(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556855 = c_33556842.toString(16);
                  if ((((code_33556855) == null ? 0 : (code_33556855).length) == 1)) {
                  helper_33556854.push("%0");;
                  }
                  else {
                  helper_33556854.push("%");;
                  }
                  
                  helper_33556854.push(code_33556855);;
                  i_33556840 += 1;
                    if (((s_33556804).length <= i_33556840)) Temporary5 = true; else {                      Temporary5 = (s_33556804[i_33556840] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556842 = s_33556804[i_33556840];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556839[j_33556841] = decodeURIComponent(helper_33556854.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556839[j_33556841] = helper_33556854.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556841 += 1;
        }
    } while (false);
    if (res_33556839.length < j_33556841) { for (var i = res_33556839.length ; i < j_33556841 ; ++i) res_33556839.push(null); }
               else { res_33556839.length = j_33556841; };
    result_33556805 = res_33556839.join("");

  return result_33556805;

}

function raiseException(e_33556665, ename_33556666) {
    e_33556665.name = ename_33556666;
    if ((excHandler == 0)) {
    unhandledException(e_33556665);
    }
    
    e_33556665.trace = nimCopy(null, rawWriteStackTrace_33556629(), NTI33554439);
    throw e_33556665;

  
}

function subInt(a_33556941, b_33556942) {
        var result = a_33556941 - b_33556942;
    checkOverflowInt(result);
    return result;
  

  
}

function chckIndx(i_33557184, a_33557185, b_33557186) {
      var Temporary1;

  var result_33557187 = 0;

  BeforeRet: do {
      if (!(a_33557185 <= i_33557184)) Temporary1 = false; else {        Temporary1 = (i_33557184 <= b_33557186);      }    if (Temporary1) {
    result_33557187 = i_33557184;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557184, a_33557185, b_33557186);
    }
    
  } while (false);

  return result_33557187;

}

function addInt(a_33556937, b_33556938) {
        var result = a_33556937 + b_33556938;
    checkOverflowInt(result);
    return result;
  

  
}
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsheaders.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557131(ti_33557132) {
  var result_33557133 = false;

  BeforeRet: do {
    result_33557133 = !((ConstSet1[ti_33557132.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557133;

}

function nimCopyAux(dest_33557144, src_33557145, n_33557146) {
    switch (n_33557146.kind) {
    case 0:
      break;
    case 1:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557146.sons.length; i++) {
      nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i]);
    }
    
      break;
    case 3:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
      for (var i = 0; i < n_33557146.sons.length; ++i) {
        nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556415(x_33556416, x_33556416_Idx, y_33556417) {
          if (x_33556416[x_33556416_Idx] === null) { x_33556416[x_33556416_Idx] = []; }
      var off = x_33556416[x_33556416_Idx].length;
      x_33556416[x_33556416_Idx].length += y_33556417.length;
      for (var i = 0; i < y_33556417.length; ++i) {
        x_33556416[x_33556416_Idx][off+i] = y_33556417.charCodeAt(i);
      }
    

  
}

function auxWriteStackTrace_33556541(f_33556542) {
          var Temporary3;

  var result_33556543 = [[]];

    var it_33556551 = f_33556542;
    var i_33556552 = 0;
    var total_33556553 = 0;
    var tempFrames_33556554 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555887);
    Label1: do {
        Label2: while (true) {
          if (!!((it_33556551 == null))) Temporary3 = false; else {            Temporary3 = (i_33556552 <= 63);          }        if (!Temporary3) break Label2;
          tempFrames_33556554[i_33556552].Field0 = it_33556551.procname;
          tempFrames_33556554[i_33556552].Field1 = it_33556551.line;
          tempFrames_33556554[i_33556552].Field2 = it_33556551.filename;
          i_33556552 += 1;
          total_33556553 += 1;
          it_33556551 = it_33556551.prev;
        }
    } while (false);
    Label4: do {
        Label5: while (true) {
        if (!!((it_33556551 == null))) break Label5;
          total_33556553 += 1;
          it_33556551 = it_33556551.prev;
        }
    } while (false);
    result_33556543[0] = nimCopy(null, [], NTI33554439);
    if (!((total_33556553 == i_33556552))) {
    result_33556543[0].push.apply(result_33556543[0], makeNimstrLit("("));;
    result_33556543[0].push.apply(result_33556543[0], cstrToNimstr(((total_33556553 - i_33556552)) + ""));;
    result_33556543[0].push.apply(result_33556543[0], makeNimstrLit(" calls omitted) ...\x0A"));;
    }
    
    Label6: do {
      var j_33556600 = 0;
      var colontmp__503316732 = 0;
      colontmp__503316732 = (i_33556552 - 1);
      var res_503316734 = colontmp__503316732;
      Label7: do {
          Label8: while (true) {
          if (!(0 <= res_503316734)) break Label8;
            j_33556600 = res_503316734;
            result_33556543[0].push.apply(result_33556543[0], cstrToNimstr(tempFrames_33556554[j_33556600].Field2));;
            if ((0 < tempFrames_33556554[j_33556600].Field1)) {
            result_33556543[0].push.apply(result_33556543[0], makeNimstrLit("("));;
            result_33556543[0].push.apply(result_33556543[0], cstrToNimstr((tempFrames_33556554[j_33556600].Field1) + ""));;
            if (false) {
            result_33556543[0].push.apply(result_33556543[0], makeNimstrLit(", "));;
            result_33556543[0].push.apply(result_33556543[0], makeNimstrLit("0"));;
            }
            
            result_33556543[0].push.apply(result_33556543[0], makeNimstrLit(")"));;
            }
            
            result_33556543[0].push.apply(result_33556543[0], makeNimstrLit(" at "));;
            add_33556415(result_33556543, 0, tempFrames_33556554[j_33556600].Field0);
            result_33556543[0].push.apply(result_33556543[0], makeNimstrLit("\x0A"));;
            res_503316734 -= 1;
          }
      } while (false);
    } while (false);

  return result_33556543[0];

}

function rawWriteStackTrace_33556629() {
  var result_33556630 = [];

    if (!((framePtr == null))) {
    result_33556630 = nimCopy(null, (makeNimstrLit("Traceback (most recent call last)\x0A") || []).concat(auxWriteStackTrace_33556541(framePtr) || []), NTI33554439);
    }
    else {
      result_33556630 = nimCopy(null, makeNimstrLit("No stack traceback available\x0A"), NTI33554439);
    }
    

  return result_33556630;

}

function newSeq_33556822(len_33556824) {
  var result_33556825 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 676;
    result_33556825 = new Array(len_33556824); for (var i = 0 ; i < len_33556824 ; ++i) { result_33556825[i] = null; }  framePtr = F.prev;

  return result_33556825;

}

function unhandledException(e_33556661) {
    var buf_33556662 = [[]];
    if (!(((e_33556661.message).length == 0))) {
    buf_33556662[0].push.apply(buf_33556662[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556662[0].push.apply(buf_33556662[0], e_33556661.message);;
    }
    else {
    buf_33556662[0].push.apply(buf_33556662[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556662[0].push.apply(buf_33556662[0], makeNimstrLit(" ["));;
    add_33556415(buf_33556662, 0, e_33556661.name);
    buf_33556662[0].push.apply(buf_33556662[0], makeNimstrLit("]\x0A"));;
    buf_33556662[0].push.apply(buf_33556662[0], rawWriteStackTrace_33556629());;
    var cbuf_33556663 = toJSStr(buf_33556662[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556663);
  }
  else {
    throw cbuf_33556663;
  }
  

  
}

function sysFatal_218103843(message_218103846) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_218103846, NTI33554439), m_type: NTI33555107, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_218103841(msg_218103842) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 29;
    sysFatal_218103843(msg_218103842);
  framePtr = F.prev;

  
}

function failedAssertImpl_218103865(msg_218103866) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/assertions.nim", line: 0};
  framePtr = F;
    F.line = 39;
    raiseAssert_218103841(msg_218103866);
  framePtr = F.prev;

  
}

function HEX2EHEX2E_503316513(a_503316516, b_503316517) {
  var result_503316520 = ({a: 0, b: 0});

  var F = {procname: ".....", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 507;
    result_503316520 = nimCopy(result_503316520, {a: a_503316516, b: b_503316517}, NTI503316514);
  framePtr = F.prev;

  return result_503316520;

}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555105, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556935) {
        if (a_33556935 > 2147483647 || a_33556935 < -2147483648) raiseOverflow();
  

  
}

function raiseIndexError(i_33556752, a_33556753, b_33556754) {
    var Temporary1;

    if ((b_33556754 < a_33556753)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(cstrToNimstr((i_33556752) + "") || [],makeNimstrLit(" not in ") || [],cstrToNimstr((a_33556753) + "") || [],makeNimstrLit(" .. ") || [],cstrToNimstr((b_33556754) + "") || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555111, name: null, trace: [], up: null}, "IndexDefect");

  
}

function HEX3DHEX3D_503316491(x_503316493, y_503316494) {
  var result_503316495 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_503316503 = false;
    F.line = 302;
    sameObject_503316503 = x_503316493 === y_503316494
    if (sameObject_503316503) {
    F.line = 303;
    result_503316495 = true;
    break BeforeRet;
    }
    
    if (!(((x_503316493).length == (y_503316494).length))) {
    F.line = 306;
    result_503316495 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_503316549 = 0;
      F.line = 126;
      var colontmp__503316739 = ({a: 0, b: 0});
      F.line = 308;
      colontmp__503316739 = nimCopy(colontmp__503316739, HEX2EHEX2E_503316513(0, subInt((x_503316493).length, 1)), NTI503316514);
      Label2: do {
        F.line = 129;
        var x_503316745 = 0;
        F.line = 90;
        var res_503316746 = colontmp__503316739.a;
        Label3: do {
          F.line = 91;
            Label4: while (true) {
            if (!(res_503316746 <= colontmp__503316739.b)) break Label4;
              F.line = 129;
              x_503316745 = res_503316746;
              F.line = 308;
              i_503316549 = x_503316745;
              if (!((x_503316493[chckIndx(i_503316549, 0, (x_503316493).length - 1)] == y_503316494[chckIndx(i_503316549, 0, (y_503316494).length - 1)]))) {
              F.line = 310;
              result_503316495 = false;
              break BeforeRet;
              }
              
              F.line = 93;
              res_503316746 = addInt(res_503316746, 1);
            }
        } while (false);
      } while (false);
    } while (false);
    F.line = 312;
    result_503316495 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_503316495;

}

function HEX3DHEX3D_503316613(x_503316615, y_503316616) {
  var result_503316617 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    if (!((x_503316615["Field0"] == y_503316616["Field0"]))) {
    F.line = 1896;
    result_503316617 = false;
    break BeforeRet;
    }
    
    if (!((x_503316615["Field1"] == y_503316616["Field1"]))) {
    F.line = 1896;
    result_503316617 = false;
    break BeforeRet;
    }
    
    F.line = 1897;
    result_503316617 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_503316617;

}

function HEX3DHEX3D_503316582(x_503316584, y_503316585) {
  var result_503316586 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: do {
    F.line = 301;
    var sameObject_503316594 = false;
    F.line = 302;
    sameObject_503316594 = x_503316584 === y_503316585
    if (sameObject_503316594) {
    F.line = 303;
    result_503316586 = true;
    break BeforeRet;
    }
    
    if (!(((x_503316584).length == (y_503316585).length))) {
    F.line = 306;
    result_503316586 = false;
    break BeforeRet;
    }
    
    Label1: do {
      F.line = 308;
      var i_503316612 = 0;
      F.line = 126;
      var colontmp__503316749 = ({a: 0, b: 0});
      F.line = 308;
      colontmp__503316749 = nimCopy(colontmp__503316749, HEX2EHEX2E_503316513(0, subInt((x_503316584).length, 1)), NTI503316514);
      Label2: do {
        F.line = 129;
        var x_503316751 = 0;
        F.line = 90;
        var res_503316752 = colontmp__503316749.a;
        Label3: do {
          F.line = 91;
            Label4: while (true) {
            if (!(res_503316752 <= colontmp__503316749.b)) break Label4;
              F.line = 129;
              x_503316751 = res_503316752;
              F.line = 308;
              i_503316612 = x_503316751;
              if (!(HEX3DHEX3D_503316613(x_503316584[chckIndx(i_503316612, 0, (x_503316584).length - 1)], y_503316585[chckIndx(i_503316612, 0, (y_503316585).length - 1)]))) {
              F.line = 310;
              result_503316586 = false;
              break BeforeRet;
              }
              
              F.line = 93;
              res_503316752 = addInt(res_503316752, 1);
            }
        } while (false);
      } while (false);
    } while (false);
    F.line = 312;
    result_503316586 = true;
    break BeforeRet;
  } while (false);
  framePtr = F.prev;

  return result_503316586;

}
var F = {procname: "module jsheaders_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim", line: 0};
framePtr = F;
Label1: do {
  F.line = 9;
  var header_503316481 = new Headers();
  F.line = 10;
  header_503316481.append("key", "value");
  if (!(header_503316481.has("key"))) {
  F.line = 11;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(11, 10) `header.hasKey(\"key\")` "));
  }
  
  if (!(HEX3DHEX3D_503316491(Array.from(header_503316481.keys()), ["key"]))) {
  F.line = 12;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(12, 10) `header.keys() == @[\"key\".cstring]` "));
  }
  
  if (!(HEX3DHEX3D_503316491(Array.from(header_503316481.values()), ["value"]))) {
  F.line = 13;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(13, 10) `header.values() == @[\"value\".cstring]` "));
  }
  
  if (!((header_503316481.get("key") == "value"))) {
  F.line = 14;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(14, 10) `header[\"key\"] == \"value\".cstring` "));
  }
  
  F.line = 15;
  header_503316481.set("other", "another");
  if (!((header_503316481.get("other") == "another"))) {
  F.line = 16;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(16, 10) `header[\"other\"] == \"another\".cstring` "));
  }
  
  if (!(HEX3DHEX3D_503316582(Array.from(header_503316481.entries()), [{Field0: "key", Field1: "value"}, {Field0: "other", Field1: "another"}]))) {
  F.line = 17;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(17, 10) `header.entries() ==\x0A    @[(\"key\".cstring, \"value\".cstring), (\"other\".cstring, \"another\".cstring)]` "));
  }
  
  if (!((JSON.stringify(Array.from(header_503316481.entries())) == "[[\"key\",\"value\"],[\"other\",\"another\"]]"))) {
  F.line = 18;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(18, 10) `header.toCstring() == \"\"\"[[\"key\",\"value\"],[\"other\",\"another\"]]\"\"\".cstring` "));
  }
  
  F.line = 19;
  header_503316481.delete("other");
  if (!(HEX3DHEX3D_503316582(Array.from(header_503316481.entries()), [{Field0: "key", Field1: "value"}]))) {
  F.line = 20;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(20, 10) `header.entries() == @[(\"key\".cstring, \"value\".cstring)]` "));
  }
  
  F.line = 21;
  (() => { const header = header_503316481; Array.from(header.keys()).forEach((key) => header.delete(key)) })();
  if (!(HEX3DHEX3D_503316582(Array.from(header_503316481.entries()), []))) {
  F.line = 22;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(22, 10) `header.entries() == @[]` "));
  }
  
  if (!((Array.from(header_503316481.entries()).length == 0))) {
  F.line = 23;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(23, 10) `header.len == 0` "));
  }
  
} while (false);
Label2: do {
  F.line = 26;
  var header_503316664 = new Headers();
  F.line = 27;
  header_503316664.append("key", "a");
  F.line = 28;
  header_503316664.append("key", "b");
  F.line = 29;
  header_503316664.append("key", "c");
  if (!((header_503316664.get("key") == "a, b, c"))) {
  F.line = 30;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(30, 10) `header[\"key\"] == \"a, b, c\".cstring` "));
  }
  
  F.line = 31;
  header_503316664.set("key", "value");
  if (!((header_503316664.get("key") == "value"))) {
  F.line = 32;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(32, 10) `header[\"key\"] == \"value\".cstring` "));
  }
  
} while (false);
Label3: do {
  F.line = 35;
  var header_503316675 = new Headers();
  F.line = 36;
  header_503316675.set("key", "a");
  F.line = 37;
  header_503316675.set("key", "b");
  if (!((header_503316675.get("key") == "b"))) {
  F.line = 38;
  failedAssertImpl_218103865(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim(38, 10) `header[\"key\"] == \"b\".cstring` "));
  }
  
} while (false);
framePtr = F.prev;
var F = {procname: "module jsheaders_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_examples1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_examples1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsheaders_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsheaders_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;